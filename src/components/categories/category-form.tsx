/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import type { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { categorySchema } from '@/schemas/category'

import { Input } from '../ui/input'

interface CreateCategoryFormProps {
  values?: z.infer<typeof categorySchema>
  getValues: (values: z.infer<typeof categorySchema>) => void
  buttonLabel: string
}

export function CategoryForm({ values, getValues, buttonLabel }: Readonly<CreateCategoryFormProps>) {
  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: values?.name ?? ''
    }
  })

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(getValues)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="DevOps" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-end">
          <Button type="submit">{buttonLabel}</Button>
        </div>
      </form>
    </Form>
  )
}
