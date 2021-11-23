import fs from 'fs';
import { join } from 'path';
import { GetServerSideProps } from 'next';

import { getAllPosts } from '../utils/blog';
import { siteUrl } from '../utils/constants';
import { FrontMatter } from '../utils/types';
import { ServerResponse } from 'http';

const SiteMap = () => {};

export default SiteMap;

const filterNonStaticPages = (page: string): boolean => {
  let omit = false;
  const nonStaticPagesArr = ['_', '[', 'sitemap'];

  nonStaticPagesArr.every(nonStaticPageItem => {
    if(page.startsWith(nonStaticPageItem)) {
      omit = true
      return false
    }
    return true
  });
  
  return !omit
};

const cleanPageName = (pageName: string): string => {
  if (pageName === 'index.tsx') {
    return `${siteUrl}`;
  }
  return `${siteUrl}/${pageName.substring(0, pageName.lastIndexOf('.'))}`;
}

const createUrlTag = (url: string): string => {
  return `
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
  `
};

const getBlogPageUrl = (blogPosts: FrontMatter[]): string => {
  return blogPosts
    .map((blogPostFrontMatter: FrontMatter) => createUrlTag(`${siteUrl}/${blogPostFrontMatter.path}`))
    .join('');
}

const getStaticPageUrl = (): string => {
  return fs.readdirSync(join(process.cwd(), 'pages'))
    .filter(filterNonStaticPages)
    .map(cleanPageName)
    .map(createUrlTag)
    .join('');
};

export const getServerSideProps = ({ res }: { res: ServerResponse}) => {
  const staticPageUrls = getStaticPageUrl();
  const allPostsUrls = getBlogPageUrl(getAllPosts());

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPageUrls}
      ${allPostsUrls}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}