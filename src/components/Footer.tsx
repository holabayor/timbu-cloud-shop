import React from 'react';
import { footerLinks } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#e6e8e6] py-4 sm:py-6 md:py-10">
      <div className="max-width">
        <div className="flex flex-wrap justify-between text-[#282828] text-xs sm:text-sm">
          {footerLinks.map((link) => (
            <div className="my-2" key={link.title}>
              <h3 className="uppercase font-semibold mb-2">{link.title}</h3>
              {link.links.map((item) => (
                <li className="list-none">
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
