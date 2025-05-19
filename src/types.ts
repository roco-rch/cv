// types.ts
import { ReactNode } from 'react'

export interface TimelineEvent {
  id: string
  // on autorise maintenant du texte *ou* n’importe quel nœud React (JSX)
  title: string | ReactNode
  date: Date
  type: 'education' | 'work' | 'event'
  location?: string
  shortDescription: string | ReactNode
  description: string
  image?: string
  gallery?: string[]
  stats?: Record<string, string>
}