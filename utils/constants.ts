import { NavigationItem, ProjectType } from './types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: 'Home',
    linkTo: '/'
  },
  {
    label: 'Projects',
    linkTo: '/projects'
  },
  {
    label: 'Blog',
    linkTo: '/blog'
  }
];

export const siteTitle = 'Parth Prajapati';
export const twitterHandle = 'iam_daparth';
export const siteUrl = 'https://parth.netlify.app';
export const siteDescription = 'The blog of Parth Prajapati';

export const SIDE_NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: "Joining Aera Technology",
    linkTo: "/joining-aera"
  },
  {
    label: "Creating a static page in Gatsby with filesystem data",
    linkTo: "/static-page-in-gatsby"
  },
  {
    label: "Minimal React vs Create React App",
    linkTo: "/minimal-react"
  },
  {
    label: "Creating a Hello World React application from scratch",
    linkTo: "/react-hello-world"
  }
];

export const enum SOCIAL_MEDIA_TYPE {
  TWITTER = 'twitter',
  FACEBOOK = 'facebook',
  LINKEDIN = 'linkedin',
};

export const PROJECT_LIST: ProjectType[] = [
  {
    name: "Education Lessons",
    image: "https://ik.imagekit.io/pimages/blog/projects/EL_v5EZ0bf26NV.png?updatedAt=1637766044521",
    description: "Educational start up to help engineering students with video lectures",
    link: "https://educationlessons.co.in"
  },
  {
    name: "Slave Bot",
    image: "https://ik.imagekit.io/pimages/blog/projects/SlaveBot_cME6WRufh.png?updatedAt=1637766130780",
    description: "A bot that automates GitHub workflows",
    link: "https://slave-bot.webflow.io"
  },
  {
    name: "Gitlly",
    image: "https://ik.imagekit.io/pimages/blog/projects/Gittly_g_2EuWImq.png?updatedAt=1637766198225",
    description: "A git client made using Electron and React",
    link: "https://prajapati-parth.github.io/gitlly/"
  },
  {
    name: "Minimal React",
    image: "https://ik.imagekit.io/pimages/blog/projects/Minimal_React_HwJqfH6T5.png?updatedAt=1637766251627",
    description: "Command line tool for quickly getting started with React application",
    link: "https://www.npmjs.com/package/minimal-react/"
  },
  {
    name: "Eureka UI",
    image: "https://ik.imagekit.io/pimages/blog/projects/Eureka_UI_E2e3BNXpc.png?updatedAt=1637766315455",
    description: "Component design system for this website",
    link: "http://eurekaui.netlify.app/"
  },
];