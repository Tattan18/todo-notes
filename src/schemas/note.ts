import { z } from 'zod'

export const noteSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: 'El nombre es requerido'
    })
    .max(50, {
      message: 'El nombre debe tener como máximo 50 caracteres'
    })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/, {
      message: 'El nombre solo puede contener letras y tildes'
    }),
  content: z
    .string()
    .min(1, {
      message: 'El contenido es requerido'
    })
    .min(200, {
      message: 'El contenido debe tener como mínimo 200 caracteres'
    })
})
