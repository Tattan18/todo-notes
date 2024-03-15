import { z } from 'zod'

export const profileSchema = z.object({
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
    }),
  lastName: z
    .string()
    .max(50, {
      message: 'El apellido debe tener como máximo 50 caracteres'
    })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/, {
      message: 'El apellido solo puede contener letras y tildes'
    }),
  email: z
    .string()
    .min(20, {
      message: 'El email es requerido'
    })
    .email({
      message: 'El email no es válido'
    })
})
