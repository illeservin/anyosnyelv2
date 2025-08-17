
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeaturedArticle from './components/FeaturedArticle';
import ArticleCard from './components/ArticleCard';
import Sidebar from './components/Sidebar';
import { MOCK_ARTICLES } from './constants';
import type { Article } from './types';

const App: React.FC = () => {
  const featuredArticle = MOCK_ARTICLES[0];
  const mainArticles = MOCK_ARTICLES.slice(1, 5);
  const otherArticles = MOCK_ARTICLES.slice(5, 11);
  const mostReadArticles = MOCK_ARTICLES.slice(11).sort(() => 0.5 - Math.random()); // just randomize for demo

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-2">
            <FeaturedArticle article={featuredArticle} />
            
            <hr className="my-8 border-slate-300" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mainArticles.map(article => (
                <ArticleCard key={article.id} article={article} layout="vertical" />
              ))}
            </div>

            <hr className="my-8 border-slate-300" />

            <div>
               {otherArticles.map(article => (
                <ArticleCard key={article.id} article={article} layout="horizontal" />
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Sidebar articles={mostReadArticles} />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
