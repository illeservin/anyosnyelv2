
import React from 'react';
import type { Article } from '../types';

interface SidebarProps {
  articles: Article[];
}

const Sidebar: React.FC<SidebarProps> = ({ articles }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
      <h3 className="text-xl font-bold border-b-4 border-red-700 pb-2 mb-4 font-serif">
        Legolvasottabb
      </h3>
      <ul className="space-y-4">
        {articles.map((article, index) => (
          <li key={article.id} className="flex items-start gap-4">
            <div className="text-3xl font-bold text-red-200 font-serif">{String(index + 1).padStart(2, '0')}</div>
            <div>
              <a href="#" className="font-semibold hover:text-red-700 transition-colors leading-tight">
                {article.title}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
