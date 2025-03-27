'use client'
import { useForm } from 'react-hook-form'
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

const categories = ['Electronics', 'Fashion', 'Home Appliances', 'Beauty', 'Books', 'Sports']

export default function AddProductForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label>Name</Label>
          <Input {...register('name', { required: 'Product name is required' })} />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors?.name?.message as string}</span>
          )}
        </div>

        <div>
          <Label>Description</Label>
          <Textarea {...register('description', { required: 'Description is required' })} />
          {errors.description && (
            <span className="text-red-500 text-sm">{errors?.description?.message as string}</span>
          )}
        </div>

        <div>
          <Label>Price ($)</Label>
          <Input
            type="number"
            step="0.01"
            {...register('price', { required: 'Price is required', min: 0 })}
          />
          {errors.price && (
            <span className="text-red-500 text-sm">{errors?.price?.message as string}</span>
          )}
        </div>

        <div>
          <Label>Category</Label>
          <Select onValueChange={(value) => setValue('category', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Product Image</Label>
          <Input
            type="file"
            accept="image/*"
            {...register('image', { required: 'Image is required' })}
          />
          {errors.image && (
            <span className="text-red-500 text-sm">{errors?.image?.message as string}</span>
          )}
        </div>

        <Button type="submit" className="bg-green-600 text-white">
          Add Product
        </Button>
      </form>
    </div>
  )
}
