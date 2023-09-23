---
title: "Creating a static page in Gatsby with filesystem data"
date: "2020-01-05T16:30:00.000Z"
layout: post
path: "static-page-in-gatsby"
theme: "pinkGradient"
categories:
  - gatsby
  - react
  - static-page
  - graphql
next:
  - Joining Aera Technology
  - /joining-aera
  - blueGradient
excerpt: "Using Gatsby to create your website has great SEO benefits. Simply saying, Gatsby converts your React components into html, css and javascript that can be easily be served using CDN. Then what’s so fancy about SEO with Gatsby? Gatsby has the power to"
---

Using Gatsby to create your website has great SEO benefits. Simply saying, Gatsby converts your React components into html, css and javascript that can be easily be served using CDN.

Then what’s so fancy about SEO with Gatsby? Gatsby has the power to call a datasource(mostly an API or in our case the local filesystem) at build-time and make the data available to React components through props using a GraphQL query.

Let’s take a deeper look at that in action by creating a static page from a markdown file.

# Create a basic hello world starter using gatsby cli
1. Download and install the gatsby-cli globally
```bash
npm install gatsby-cli -g
```
2. Initiate a hello world starter
```bash
gatsby new static-page https://github.com/gatsbyjs/gatsby-starter-hello-world
```
3. Change the directory and run the project
```bash
cd static-page
npm start
```
4. At this point you’ll be able to see a page with “Hello world!” in your browser by navigating to <a target="_blank" href="http://localhost:8000">http://localhost:8000</a>

<img class="img-fluid" src="https://dl.dropboxusercontent.com/s/ry3igfqt219spss/initial-setup-gatsby-cli.png?dl=0" alt="initial-setup-gatsby-cli" />

This is the basic setup for a hello world gatsby website

# Add plugin to read markdown files from file system
To read data from the files in your local system, we’ll be adding a plugin called <a target="_blank" href="https://www.npmjs.com/package/gatsby-source-filesystem">gatsby-source-filesystem</a>. This plugin will read data from markdown files and make it available to be queried by GraphQL.

1. Install gatsby-source-filesystem
```bash
yarn add gatsby-source-filesystem --save
```
2. Configure the use of plugin in `gatsby-config.js`. If the file is not present, you can create one at the root of the project, Gatsby would read this file to load the set of plugins listed in the `plugins` array. Your gatsby-config.js should look something like this:
```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/static-pages`,
        name: "markdown-pages",
      }
    }
  ]
}
```

| | |
|----|----|
| resolve | the plugin to be used |
| options.path | the directory from which the files are to be read |
| options.name | used for identification and querying the nodes in the GraphQL query |

3. Now we can go ahead and create a markdown page in our file system. At the path mentioned during plugin configuration, create a file with any name in `/src/static-pages` directory with the following content  
  
```md
---
path: "/my-first-static-page"
date: "2020-01-05"
title: "Creating a static page to learn Gatsby"
---
Hello, this my first gatsby static page by reading <a target="_blank" href="https://parth.netlify.app/static-page-in-gatsby">this</a> blog.
```

Any markdown syntax in this file, will be converted to html to be displayed on a webpage. Gatsby has a plugin right for that.

At this point, if you run your project using `npm start` and go to <a target="_blank" href="http://localhost:8000/___graphql">http://localhost:8000/___graphql</a>, you’ll be able to query the file details that this plugin has read from the filesystem. You’d be able to see something like this

<img class="img-fluid" src="https://dl.dropboxusercontent.com/s/ugy5ord2ugxrw5j/gatsby-source-file-system-graphql-query.png?dl=0" alt="gatsby-source-filesystem-graphql-query" />

> If you have multiple files, you’ll be able to see multiple items in the `edges` array. One for each file.

> You’ll need to rerun the project `npm start` if you make any changes to `gatsby-config.js` file. 

By this step we can know that Gatsby has read the content from our local filesystem and made it available to be used in our project.

# Converting markdown files to HTML
Let’s add one more plugin, <a target="_blank" href="https://www.npmjs.com/package/gatsby-transformer-remark">gatsby-transformer-remark</a> to our project. `gatsby-transformer-remark` would convert the files that we fetched using `gatsby-source-filesystem` from markdown to HTML.

1. Install gatsby-transformer-remark
```bash
yarn add gatsby-transformer-remark --save
```
2. Configure the use of this plugin in `gatsby-config.js`. Let’s go ahead and add one more item to the array of plugins in `gatsby-config.js`. Your `gatsby-config.js` should look something like this by now.
```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/static-pages`,
        name: "markdown-pages",
      }
    },
    'gatsby-transformer-remark'
  ]
}
```

We’ll not be configuring other options of this plugin and use the default ones. But I recommend checking out <a target="_blank" href="https://www.npmjs.com/package/gatsby-transformer-remark">the plugin documentation</a> if you need custom implementation.

> Did you notice the values of path, date and title that we wrote inside of `---` in the markdown file? It is this plugin that reads the values inside and makes it available as separate nodes to be fetched data from. These values are called frontmatter and we’ll further look more into it.

`gatsby-transformer-remark` would create a new node at the parent level of your GraphQL data that you can query and check the markdown converted to HTML. 

Execute this query
```graphql
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          date
          path
          title
        }
        html
      }
    }
  }
}
```

We’ll get a result like this

<img class="img-fluid" src="https://dl.dropboxusercontent.com/s/yfyqxsd5pdhmkqb/gatsby-transformer-remark-graphql-query.png?dl=0" alt="gatsby-transformer-remark-graphql-query" />

> Notice the values of date, path and title are displayed within the `frontmatter` object. These values are not expected to be of markdown syntax and are not converted to HTML during the conversion process. These values serve as metadata for your blog that can also be queried and used as filters, just in case, in your GraphQL query.

> Notice the value against the `html` key? All the markdown that was inside of our file got converted into html. Pretty neat huh?

# Create a template to display queried HTML
Now, let’s go ahead and create a template page(actually a react component) that can be used to query data from GraphQL and render it on a web page.

Create a file `blog-temple.js` anywhere inside your src directory with the following content
```jsx
import React from "react";
import {graphql} from 'gatsby';

const BlogTemplate = ({data}) => {
    const { markdownRemark } = data;
    const { frontmatter: { title, date } , html } = markdownRemark;

    return (
      <div>
        Title: {title}<br/>
        Date: {date}<br/>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    ); 
}

export default BlogTemplate;

export const pageQuery = graphql`
  query StaticPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`;
```

This component is capable of querying data from our GraphQL source and render it on to a web page. 

> See how the frontmatter data and the html data are available and used in different ways.

# Create a page using the template and Gatsby lifecycle APIs
Gatsby has lifecycle APIs that let you control the website build flow like fetching data from different sources, creating pages from those fetched data and many more that you can find <a target="_blank" href="https://www.gatsbyjs.org/docs/node-apis">here</a>.

For our use case, we’ve already fetched data to be displayed using `gatsby-source-filesystem` from our local filesystem. We’ll now be using Gatsby’s node API `createPages` to use that data and create a page using the blog-template that we just created.

Create a new file at the root of your project and call it `gatsby-node.js`. Gatsby will read exported functions from this file at build time and we can execute our custom code inside those functions.

Go ahead and add this content to `gatsby-node.js`.
```js
exports.createPages = ({ actions, graphql }) => {
  
};
```

In this function we can now query our data using the `graphql` variable and create a page using `actions.createPage`. Let’s now do the following things in this function
- Fetch data using a graphql query
- Loop through the data and call `createPage` using `blog-template.js`

```js
const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const {createPage} = actions;

  const blogTemplate = path.resolve(`src/templates/blog-template.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogTemplate,
        context: {
          url: node.frontmatter.path
        }
      });
    });
  })
};
```

This would create a page at the path mentioned in the `path` value of the frontmatter of the markdown file. Here’s how the page would look:

<img class="img-fluid" src="https://dl.dropboxusercontent.com/s/lrj340xd4chje0a/gatsby-static-page.png?dl=0" alt="gatsby-static-page" />

You can update the blog-template.js (react component) to style the different elements displayed on the static page to suit your needs. 

When you build the project, generally using the `npm run build` or `gatsby build` command, Gatsby would generate a static HTML file from your markdown file that can be found in the `public` directory at the root of your project. 

<img class="img-fluid" src="https://dl.dropboxusercontent.com/s/sp3yrpndesnxo0i/static-page-built-from-markdown.png?dl=0" alt="static-page-built-from-markdown" />

# Adding more static pages
Moving forward, adding more static pages is very simple. You may just add more markdown files to the directory that you have configured with the `gatsby-source-filesystem` and they’ll be generated and built in the `gatsby-node.js` file as the function loops through all the items in the graphql query.

> Important Tip: Always remember to specify a unique value for url in frontmatter throughout your website.

Here’s a GitHub repo of all the code generated during this blog:
<a target="_blank" href="https://github.com/prajapati-parth/gatsby-static-page-blog">https://github.com/prajapati-parth/gatsby-static-page-blog</a>

In the next blog, I’ll be writing about how you can configure Gatsby to use multiple templates. 