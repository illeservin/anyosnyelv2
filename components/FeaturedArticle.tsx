
import React from 'react';
import type { Article } from '../types';
import { getCategoryColor } from '../utils/categoryColors';

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <article className="group overflow-hidden rounded-lg shadow-lg bg-white">
      <div className="relative">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
           <span 
              className={`inline-block text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${getCategoryColor(article.category)}`}
            >
              {article.category}
            </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 leading-tight font-serif group-hover:underline">
            <a href="#">{article.title}</a>
          </h2>
        </div>
      </div>
      <div className="p-6">
        <p className="text-slate-600 leading-relaxed">{article.excerpt}</p>
        <div className="text-sm text-slate-500 mt-4">
          <span>{article.author}</span> &middot; <span>{article.date}</span>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticle;
