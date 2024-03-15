import { z } from 'zod'

export const categorySchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'El nombre es requerido'
    })
    .max(50, {
      message: 'El nombre debe tener como máximo 50 caracteres'
    })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/, {
      message: 'El nombre solo puede contener letras y tildes'
    })
})
