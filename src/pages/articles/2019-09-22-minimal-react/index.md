---
title: "Minimal React vs Create React App"
date: "2019-09-22T16:00:00.000Z"
layout: post
path: "/minimal-react"
theme: "greenGradient"
categories:
  - react
  - minimal-react
  - cli
  - boilerplate
---

Considering React and React Native, [create-react-app](https://facebook.github.io/create-react-app) and [react-native-cli](https://www.npmjs.com/package/react-native-cli) are far more popular tools than any other to get started with a basic application, yet I created [minimal-react](https://www.npmjs.com/package/minimal-react) that serve different purposes. 

I needed something that would kick-in fast, would have less dependencies, would have a simple architecture and be easy to understand and modify for someone getting started. [minimal-react](https://www.npmjs.com/package/minimal-react) is one such tool.

Let’s look at some of the features that minimal-react offers and the upcoming changes in it.
# Less dependencies
Here’s a screenshot comparing the `node_modules` directory created by minimal-react and create-react-app.

<img src="https://dl.dropboxusercontent.com/s/fb9m89834fkv30u/node-modules-comparision.png?dl=0" />

Minimal-react has smaller node_modules which means it has fewer dependencies on other modules hence installs faster and is easier to get started quickly. This would be a very helpful tool for someone who’s just starting to learn React, especially at work place during sessions or when explaining React to other teams.

# Smaller bundle size
After initializing and building applications both with minimal-react and create-react-app, the final js bundle is quite smaller in size when created with minimal-react. This would make the web application faster to load in the browser. Here’s a comparison of final bundle size:


| minimal-react | create-react-app |
|----|----|
| 127 Kb | 141 Kb |

# Easily configurable
Minimal react provides the user with all the control of the application where the module bundler(webpack) the transpiler(babel) are free to be configured and even to be replaced.

# Simpler folder structure
Minimal react gets started with a simpler folder structure for the components rather than putting everything inside the `src` directory. Here’s a screenshot of the folder structure from minimal-react

<img src="https://dl.dropboxusercontent.com/s/j18b2yf279l09y6/folder-structure.png?dl=0" />

# Upcoming changes
These are some of the planned changes for minimal-react that would make it more simpler and quicker
- Replace npm with yarn
- Replace webpack with parcel for zero configuration (this would eliminate `webpack.config.js` and `webpack.dev.config.js` files from the project directory
- Provide configuration to initiate React app along with Redux

If you haven’t tried out minimal-react yet, I suggest you give it a try and let me know the feedback on [twitter](https://twitter.com/iam_daparth).

## Useful links
- [minimal-react NPM](https://www.npmjs.com/package/minimal-react)
- [minimal-react GitHub](https://github.com/prajapati-parth/minimal-react)
