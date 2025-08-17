
import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';

const Footer: React.FC = () => {
  const footerLinks = ['Impresszum', 'Adatvédelem', 'Médiaajánlat', 'Kapcsolat'];
  
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white font-serif">Anyósnyelv</h2>
            <p className="text-sm mt-2">Mert valakinek ki kell mondani</p>
          </div>
          <div>
            <h3 className="font-bold text-white uppercase tracking-wider">Hasznos linkek</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white uppercase tracking-wider">Kövess minket</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="hover:text-white transition-colors"><FacebookIcon /></a>
              <a href="#" className="hover:text-white transition-colors"><TwitterIcon /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Anyósnyelv.hu. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
