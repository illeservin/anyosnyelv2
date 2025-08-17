
import React from 'react';
import type { Article } from '../types';
import { getCategoryColor } from '../utils/categoryColors';

interface ArticleCardProps {
  article: Article;
  layout?: 'vertical' | 'horizontal';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, layout = 'vertical' }) => {
  if (layout === 'horizontal') {
    return (
      <article className="group flex flex-col sm:flex-row items-start gap-4 mb-6 pb-6 border-b border-slate-200 last:border-b-0">
        <div className="flex-shrink-0 w-full sm:w-48">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-32 object-cover rounded-md group-hover:opacity-90 transition-opacity"
          />
        </div>
        <div>
           <span className={`inline-block text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${getCategoryColor(article.category)}`}>
            {article.category}
          </span>
          <h3 className="text-xl font-bold mt-2 leading-tight group-hover:text-red-700 transition-colors font-serif">
            <a href="#">{article.title}</a>
          </h3>
          <p className="text-sm text-slate-500 mt-2 hidden md:block">{article.excerpt}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
         <span className={`inline-block text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded self-start ${getCategoryColor(article.category)}`}>
          {article.category}
        </span>
        <h3 className="text-lg font-bold mt-2 leading-tight flex-grow group-hover:text-red-700 transition-colors font-serif">
          <a href="#">{article.title}</a>
        </h3>
        <div className="text-sm text-slate-500 mt-4">
          <span>{article.date}</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
