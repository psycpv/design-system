import React, { FC } from 'react';
import DzLink from './DzLink';

interface PageBreadcrumb {
  name: string;
  href: string;
  current: boolean;
}
export interface DzBreadcrumbsProps {
  pages: PageBreadcrumb[];
}

export const DzBreadcrumbs: FC<DzBreadcrumbsProps> = ({ pages = [] }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page, key) => (
          <li key={page.name}>
            <div className="flex items-center">
              {key !== 0 ? (
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              ) : null}

              <DzLink
                LinkElement="a"
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </DzLink>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default DzBreadcrumbs;
