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
export const siteUrl = 'https://www.parthp.dev';
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

export const SOCIAL_MEDIA_TYPE = {
  TWITTER: 'twitter',
  FACEBOOK: 'facebook',
  LINKEDIN: 'linkedin',
};

export const PROJECT_LIST: ProjectType[] = [
  {
    name: "Education Lessons",
    image: "https://dl.dropboxusercontent.com/s/icc5ggmv579py6b/EL.png?dl=0",
    description: "Educational start up to help engineering students with video lectures",
    link: "https://educationlessons.co.in"
  },
  {
    name: "Slave Bot",
    image: "https://dl.dropboxusercontent.com/s/ywlwhoggj13ayzt/SlaveBot.png?dl=0",
    description: "A bot that automates GitHub workflows",
    link: "https://slave-bot.webflow.io"
  },
  {
    name: "Gitlly",
    image: "https://dl.dropboxusercontent.com/s/2adj79bgyjzdgkx/Gittly.png?dl=0",
    description: "A git client made using Electron and React",
    link: "https://prajapati-parth.github.io/gitlly/"
  },
  {
    name: "Minimal React",
    image: "https://dl.dropboxusercontent.com/s/wp1y2tfpi138vyo/Minimal%20React.png?dl=0",
    description: "Command line tool for quickly getting started with React application",
    link: "https://www.npmjs.com/package/minimal-react/"
  },
  {
    name: "Eureka UI",
    image: "https://dl.dropboxusercontent.com/s/om1tnte0u8eou2a/Eureka%20UI.png?dl=0",
    description: "Component design system for this website",
    link: "http://eurekaui.parthp.dev/"
  },
];