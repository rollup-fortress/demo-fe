import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 text-gray-500 text-sm bg-card">
      <div className="mb-4 sm:mb-0">
        Special thanks to Matteo Celani for the template
      </div>
      <div>
        <Link
          href="https://github.com/rollup-fortress/uncensored"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
        >
          SDK GitHub
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
