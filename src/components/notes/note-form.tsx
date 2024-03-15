/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import type { z } from 'zod'
import type { Note } from '@/interfaces/note'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { noteSchema } from '@/schemas/note'

import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

interface CreateCategoryFormProps {
  values?: z.infer<typeof noteSchema>
  getValues: (values: z.infer<typeof noteSchema>) => void
  buttonLabel: string
  note?: Note
}

export function NoteForm({ values, getValues, buttonLabel, note }: Readonly<CreateCategoryFormProps>) {
  const form = useForm<z.infer<typeof noteSchema>>({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      title: note?.title || values?.title || '',
      content: note?.description || values?.content || ''
    }
  })

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(getValues)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input placeholder="¿Qué es DevOps?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>Contenido</FormLabel>
              <FormControl>
                <Textarea placeholder="Escribe aquí..." style={{ maxHeight: '40vh' }} {...field} />
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
