import { Icon } from "react-feather";

export type NavigationItem = {
  label: string,
  linkTo: string,
};

export type FrontMatter = {
  title: string,
  date?: string,
  layout?: string,
  path: string,
  theme?: string,
  categories?: string[],
  next: string[],
  excerpt?: string,
};

export type BlogPost = {
  frontMatter: FrontMatter,
  content: string,
};

export type SocialMediaShareObjType = {
  [key: string]: {
    postLink: string,
    getPostText: (url: string, title: string) => string,
    component: Icon,
  }
}

export type ProjectType = {
  name: string,
  image: string,
  description: string,
  link: string,
}