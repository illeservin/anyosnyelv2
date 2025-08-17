
import type { Category } from '../types';

export const getCategoryColor = (category: Category): string => {
  switch (category) {
    case 'Belföld':
      return 'bg-blue-600';
    case 'Külföld':
      return 'bg-green-600';
    case 'Gazdaság':
      return 'bg-yellow-600';
    case 'Kultúra':
      return 'bg-purple-600';
    case 'Tech':
      return 'bg-indigo-600';
    default:
      return 'bg-slate-600';
  }
};
