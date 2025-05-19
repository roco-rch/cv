export interface TimelineEvent {
  id: string;
  title: string;
  date: Date;
  type: 'education' | 'work' | 'event';
  location?: string;
  shortDescription: string;
  description: string;
  image?: string;
  gallery?: string[];
  stats?: Record<string, string>;
}