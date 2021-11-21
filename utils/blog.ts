import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { BlogPost, FrontMatter } from './types';

const postsDirectory = join(process.cwd(), 'articles');

export const getAllPosts = (): FrontMatter[] => {
  const posts = fs.readdirSync(postsDirectory);
  
  return posts.map((post: string) => {
    const fileRawContent: string = fs.readFileSync(join(postsDirectory, post, 'index.md'), 'utf8');
    const {
      title, date, layout, path, theme, categories, next, excerpt
    } = matter(fileRawContent).data;
    
    return {
      title, date, layout, path, theme, categories, next, excerpt
    };
  }).sort((valueA, valueB) => Date.parse(valueB.date) - Date.parse(valueA.date));
};

export const getAllPostsPath = (): string[] => {
  const posts = fs.readdirSync(postsDirectory);

  return posts.map((post: string) => {
    const fileRawContent: string = fs.readFileSync(join(postsDirectory, post, 'index.md'), 'utf8');
    const { path } = matter(fileRawContent).data as FrontMatter;
    
    return path;
  })
}

export const getPostDetails = (path: string): BlogPost => {
  const postFilePath = join(process.cwd(), 'articles', path, 'index.md');
  console.log("----------------------------")
  console.log(postFilePath);
  console.log("----------------------------")
  const postRawContent = fs.readFileSync(postFilePath, 'utf8');

  const {
    data: {title, excerpt, next}, content
  } = matter(postRawContent);

  return {
    frontMatter: {
      title, excerpt, path, next
    },
    content
  };
}