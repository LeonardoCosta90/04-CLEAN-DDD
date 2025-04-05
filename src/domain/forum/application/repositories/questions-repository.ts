import { PaginationParams } from '@/core/repositories/pagination-params'
import { Question } from '../../entreprise/entities/question'

export interface QuestionsRepository {
  findById(id: string): Promise<Question | null>
  save(question: Question): Promise<void>
  findManyRecent(params: PaginationParams): Promise<Question[]>
  findBySlug(slug: string): Promise<Question | null>
  create(question: Question): Promise<void>
  delete(question: Question): Promise<void>
}
