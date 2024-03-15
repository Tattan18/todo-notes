/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import type { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { profileSchema } from '@/schemas/profile'

import { Input } from '../ui/input'

interface ProfileFormProps {
  values?: z.infer<typeof profileSchema>
}

export function ProfileForm({ values }: Readonly<ProfileFormProps>) {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: values?.name ?? '',
      lastName: values?.lastName ?? '',
      email: values?.email ?? ''
    }
  })

  return (
    <Form {...form}>
      <form className="space-y-8">
        <div className="grid grid-cols-2 gap-x-10 gap-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Nombre(s)</FormLabel>
                <FormControl>
                  <Input readOnly placeholder="Jhon" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Apellidos</FormLabel>
                <FormControl>
                  <Input readOnly placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input readOnly placeholder="email@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  )
}
