'use client'

import { useForm, Controller } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { useGetCategories } from '@/api/query/admin/useGetCategories'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Upload, Save, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useUploadMultipleFiles } from '@/api/mutations/admin/useUploadFile'
import { useAddProducts } from '@/api/mutations/admin/useAddProducts'
import { toast } from 'sonner'

interface ProductFormData {
  name: string
  description: string
  price: number
  quantity: number
  categoryId: number
  categoryName?: string
}

interface ImagePreview {
  id: string
  url: string
  file: File
}

interface UploadResponse {
  imageUrls: string[]
}

export default function AddProductForm() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<ProductFormData>()

  const [imagePreviews, setImagePreviews] = useState<ImagePreview[]>([])
  const [uploadedImageUrls, setUploadedImageUrls] = useState<string[]>([])
  const [hasUploadedImages, setHasUploadedImages] = useState(false)
  const cat = useGetCategories()
  const router = useRouter()

  useEffect(() => {
    if (cat.data && cat.data.length > 0) return
    router.push('/admin/products/add-category')
  }, [cat.data, router])

  const addProducts = useAddProducts()
  const onSubmit = async (data: ProductFormData) => {
    try {
      if (!hasUploadedImages) {
        alert('Please upload at least one image')
        return
      }
      console.log(data)
      const res = await addProducts.mutateAsync({
        availableQuantity: data.quantity,
        categoryId: data.categoryId,
        description: data.description,
        name: data.name,
        price: Number(data.price),
        images: uploadedImageUrls,
      })
      if (res) {
        toast.success('Product created successfully')
        router.push('/admin/products')
      } else {
        toast.error('Product creation failed')
      }
    } catch (error) {
      console.error('Error creating product:', error)
    }
  }

  const uploadFiles = useUploadMultipleFiles()
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const newPreviews: ImagePreview[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const reader = new FileReader()

      reader.onloadend = () => {
        const newPreview = {
          id: `${Date.now()}-${i}`,
          url: reader.result as string,
          file: file,
        }

        setImagePreviews((prev) => [...prev, newPreview])
      }

      reader.readAsDataURL(file)
    }

    const formData = new FormData()
    Array.from(files).forEach((file) => {
      formData.append('files', file)
    })

    const res = await uploadFiles.mutateAsync({
      formData: {
        images: Array.from(files),
      },
      type: 'product',
    })
    console.log(res)
    const response = res as unknown as { imageUrls: string[] }
    if (response && response.imageUrls) {
      setUploadedImageUrls((prev) => [...prev, ...response.imageUrls])
      setHasUploadedImages(true)
    }
  }

  const removeImage = (id: string) => {
    setImagePreviews((prev) => prev.filter((img) => img.id !== id))
  }

  const handleCategoryChange = (value: string) => {
    const selectedCategory = cat.data?.find((category: any) => category.id === value)
    if (selectedCategory) {
      setValue('categoryId', parseInt(value))
      setValue('categoryName', selectedCategory.name as unknown as string)
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <Button variant="ghost" className="gap-2" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter product name"
                    {...register('name', { required: 'Product name is required' })}
                    className={cn(errors.name && 'border-red-500')}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter product description"
                    {...register('description', { required: 'Description is required' })}
                    className={cn(errors.description && 'border-red-500')}
                  />
                  {errors.description && (
                    <span className="text-red-500 text-sm">{errors.description.message}</span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    {...register('price', {
                      required: 'Price is required',
                      min: { value: 0, message: 'Price must be greater than 0' },
                      valueAsNumber: true,
                    })}
                    className={cn(errors.price && 'border-red-500')}
                  />
                  {errors.price && (
                    <span className="text-red-500 text-sm">{errors.price.message}</span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Available Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="0"
                    placeholder="0"
                    {...register('quantity', {
                      required: 'Quantity is required',
                      min: { value: 0, message: 'Quantity must be greater than or equal to 0' },
                      valueAsNumber: true,
                    })}
                    className={cn(errors.quantity && 'border-red-500')}
                  />
                  {errors.quantity && (
                    <span className="text-red-500 text-sm">{errors.quantity.message}</span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Controller
                    name="categoryId"
                    control={control}
                    rules={{ required: 'Category is required' }}
                    render={({ field }) => (
                      <Select
                        onValueChange={(value) => handleCategoryChange(value)}
                        value={field.value?.toString()}
                      >
                        <SelectTrigger className={cn(errors.categoryId && 'border-red-500')}>
                          <SelectValue placeholder="Select a category">
                            {watch('categoryName') || 'Select a category'}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {cat?.data?.map((category: any) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.categoryId && (
                    <span className="text-red-500 text-sm">{errors.categoryId.message}</span>
                  )}
                </div>
              </div>

              {/* Right Column - Image Upload */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Product Images</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    {imagePreviews.length > 0 ? (
                      <div className="grid grid-cols-2 gap-4">
                        {imagePreviews.map((preview) => (
                          <div key={preview.id} className="relative aspect-square">
                            <Image
                              src={preview.url}
                              alt="Preview"
                              fill
                              className="object-cover rounded-lg"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2 z-10"
                              onClick={() => removeImage(preview.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="h-8 w-8 mx-auto text-gray-400" />
                        <div className="text-sm text-gray-600">
                          <label
                            htmlFor="images"
                            className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80"
                          >
                            <span>Upload files</span>
                            <input
                              id="images"
                              type="file"
                              accept="image/*"
                              multiple
                              className="sr-only"
                              onChange={handleImageChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    )}
                  </div>
                  {!hasUploadedImages && (
                    <span className="text-red-500 text-sm">At least one image is required</span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-6">
              <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting} className="gap-2">
                <Save className="h-4 w-4" />
                {isSubmitting ? 'Creating...' : 'Create Product'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
