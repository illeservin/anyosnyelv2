
export type Category = 'Belföld' | 'Külföld' | 'Gazdaság' | 'Kultúra' | 'Tech';

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: Category;
  author: string;
  date: string;
}
