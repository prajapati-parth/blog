---
title: "Creating a Hello World React application from scratch"
date: "2018-01-12T11:00:00.000Z"
layout: post
path: "/react-hello-world"
categories:
  - React
  - ReactDOM
  - Babel
  - Webpack
---

Creating an application from scratch has its own perks and advantages. Whilst the excitement of building from ground up is a perk, the advantages can be listed as:  
- Having total control over the application in terms of configuration and architecture
- Knowing the ins and outs and every corner of it
- Control over each and every package used
- And of course you get to be the “Know It All” person

So let’s get started creating a hello world application in [React](https://reactjs.org)

## Initial Setup
1. Create an empty directory. Here we’ll use `hello-world`
```shell
mkdir hello-world
```
2. Initialize npm (make sure you have node and npm installed on your machine)
```shell
cd hello-world
npm init -y
```
`npm init -y` creates a `package.json` file with the default values. Just in case you need want to provide values during initialization, use `npm init` skipping `-y` option.

That’s it! You have successfully initialized npm and we are now ready to add React.

## Install React and ReactDOM
ReactDOM as the name indicates serves as a glue between the browser [DOM(Document Object Model)](https://www.w3.org/TR/WD-DOM/introduction.html), whereas React is so obvious that I need not explain it.

Let’s go ahead and install React and ReactDOM.
```shell
npm install react react-dom --save
```

Next let’s setup [Babel](https://babeljs.io) so that browsers can understand JavaScript’s ES6 syntax and the man of the hour, React!

## Install and configure Babel
Babel is a JavaScript transpiler that transpile ES6 and higher versions of JavaScript and React’s JSX to browser understandable JavaScript.

Install babel and configuration packages:
```shell
npm install babel-core babel-loader babel-preset-env babel-preset-react --save-dev
```

Okay some explanation here:
1. `babel-core` - The actual babel package.
2. `babel-loader` - Loader used by [webpack](https://webpack.js.org) to call babel.
3. `babel-preset-env` - Babel preset used to transpile ES6 and higher version to ES5.
4. `babel-preset-react` - Adds support for JSX.

## Install and configure Webpack
Webpack is a module bundler. Webpack is a build tool that puts all your files including JS, CSS, images, fonts, JSON, etc into a dependency tree. It allows you to use `require()` and `import` in your code to make it more modularised.

Let’s put that too in!
```shell
npm install webpack --save-dev
```

Now create a webpack configuration file `webpack.config.js` in the root for project.
```js
var path = require('path');
var webpack = require('webpack');

module.exports = {
   entry: './src/index.js',
   output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'bundle.min.js',
       libraryTarget: 'umd'
   },

   module: {
       loaders: [
           {
               test: /\.js$/,
               exclude: /(node_modules|bower_components|build)/,
               use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ['env']
                   }
               }
           }
       ]
   },

    plugins: [
       new webpack.DefinePlugin({
           "process.env": {
               NODE_ENV: JSON.stringify("production")
           }
       }),
       new webpack.optimize.UglifyJsPlugin({
           compress: {
               warnings: false,
           },
           output: {
               comments: false,
           },
       })
   ]
}
```

After these steps your `package.json` should look something like this
```json
{
 "name": "hello-world",
 "version": "1.0.0",
 "main": "index.js",
 "license": "ISC",
 "dependencies": {
   "react": "^16.2.0",
   "react-dom": "^16.2.0"
 },
 "devDependencies": {
   "babel-core": "^6.26.0",
   "babel-loader": "^7.1.2",
   "babel-preset-env": "^1.6.1",
   "babel-preset-react": "^6.24.1",
   "webpack": "^3.10.0",
   "webpack-dev-server": "^2.9.7"
 }
}
```

Phew! Enough of configuration. Now let’s get into some actual code for project `hello-world`.

## Create index.html and React components
Create an `index.html` file in the root of your project directory, where we’ll dump our React component code.

```html
<!doctype html>
<html lang="en">
 <head>
   <title>Hello World</title>
 </head>
   <body>
     <noscript>
       You need to enable JavaScript to run this app.
     </noscript>

     <div id="root"></div>

     <script src="./dist/bundle.min.js" type="text/javascript"></script>
   </body>
</html>
```
Create a `src` directory in the root and place `index.js` file in it which will consist of, finally, our React component.

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
 return <h3>Hello World!</h3>
}

ReactDOM.render(
 <App />,
 document.getElementById('root')
)
```

And we are done!

## Add a build script in package.json
As a final step let’s add a script to `package.json` to run our build and generate a bundle file.

```json
"scripts": {
   "build": "webpack"
 }
```

To generate build run the following command:
```shell
npm run build
```

Open `./index.html` in a web browser to view the react app! Cheers!
