import type { Category } from './category'

export interface Note {
  id: string
  title: string
  description: string
  date: Date
  category: Category
}
