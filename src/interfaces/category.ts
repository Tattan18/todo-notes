import type { Note } from './note'

export interface Category {
  id: string
  date: Date
  name: string
  notes?: Note[]
}
