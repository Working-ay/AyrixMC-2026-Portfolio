import React from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Reviews', href: '#reviews' },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-8 flex justify-center backdrop-blur-sm bg-black/60">
      <ul className="flex gap-6 md:gap-12 px-4">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <a 
              href={item.href}
              className="text-[10px] md:text-xs font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};