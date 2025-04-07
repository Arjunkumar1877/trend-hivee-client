'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Save } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAddCategory } from '@/api/mutations/admin/useAddCategory'
import { toast } from 'sonner'

interface CategoryFormData {
  name: string
  description: string
}

export default function AddCategoryPage() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CategoryFormData>({
    defaultValues: {
      name: '',
      description: '',
    },
  })
  const addCategory = useAddCategory()
  const onSubmit = async (data: CategoryFormData) => {
    try {
      console.log('Creating category:', data)
      const res = await addCategory.mutateAsync(data)
      console.log('res', res)

      if (res) {
        toast.success('Category created successfully')
        router.push('/admin/products')
      } else {
        toast.error('Failed to create category')
      }
    } catch (error) {
      console.error('Error creating category:', error)
      toast.error('Failed to create category')
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <Button variant="ghost" className="gap-2" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Category</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Category Name
              </label>
              <Input
                id="name"
                placeholder="Enter category name"
                {...register('name', {
                  required: 'Category name is required',
                  minLength: {
                    value: 2,
                    message: 'Category name must be at least 2 characters',
                  },
                  maxLength: {
                    value: 50,
                    message: 'Category name must be less than 50 characters',
                  },
                })}
                className={cn(errors.name && 'border-red-500')}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="description"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Description
              </label>
              <Textarea
                id="description"
                placeholder="Enter category description"
                {...register('description', {
                  required: 'Description is required',
                  minLength: {
                    value: 10,
                    message: 'Description must be at least 10 characters',
                  },
                  maxLength: {
                    value: 500,
                    message: 'Description must be less than 500 characters',
                  },
                })}
                className={cn(
                  'min-h-[100px]',
                  errors.description && 'border-red-500'
                )}
              />
              {errors.description && (
                <span className="text-red-500 text-sm">
                  {errors.description.message}
                </span>
              )}
            </div>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting} className="gap-2">
                <Save className="h-4 w-4" />
                {isSubmitting ? 'Creating...' : 'Create Category'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
