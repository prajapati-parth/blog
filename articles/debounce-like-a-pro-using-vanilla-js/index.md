---
title: "Debouncing like a pro using Vanilla JS"
date: "2023-09-30T13:40:00.000Z"
layout: post
path: "debounce-like-a-pro-using-vanilla-js"
theme: "pinkGradient"
categories:
  - vanilla JS
  - fundamentals
previous:
  - Creating a game using Vanilla JavaScript
  - /game-using-vanilla-javascript
  - greenGradient
next: ""
excerpt: "Let’s learn about debouncing today. A fairly simple concept that can improve the performance of your application but is often ignored."
---

Let’s learn about debouncing today. A fairly simple concept that can improve the performance of your application but is often ignored.

# What is Debouncing?
I’d say debouncing is improving the performance of an application by avoiding to execute some code on each repetitive action of a user and waiting for a set interval of time before executing it.

Let’s understand this by an example.
Say you have a huge list of products that you paginate and display 15-20 items on each page and have a search box that makes an API call to fetch the products as you type. Now it is not advisable to make an API call on each keypress because the user still might be trying to type in the complete word or even correct the word already typed.

So instead of fetching what the user wants as soon as he starts typing, we wait for a few milliseconds to check if the user is still typing and make the API call only if he’s done typing.

A real life example of debouncing is the clap button on a medium article.

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/17194534/271762404-96218e25-7a9e-4f62-ba88-efd22783cac3.gif" alt="Medium.com debouncing example" class="img-fluid" />

As we see in the image, when clicking multiple times on the clap icon, the application shows us the number of clicks done but it does not make API calls for every click. And as soon as I stop clicking the clap button, it makes an API call to update the backend with the number of claps I’ve done. This is debouncing. Not making an API call per click of the clap button.

# What happens if there's no debouncing?
Continuing the example of the clap button on Medium, let’s assume that there was no debouncing and I clicked on the clap button 50 times quickly. This would mean a terrible thing for Medium’s backend like
- Handling 50 API calls instead of 1
- Rather than updating the database once with 50 claps, it would fire the update query 50 times for 50 distinct requests incrementing the clap by 1, that is 50 write operations instead of 1
- Sending response back the the browser 50 times

On the front-end it means
- The application handles response 50 times instead of 1
- More network bandwidth being used to make those 50 calls
- More JS code being executed to handle the 50 requests and response making the application less efficient

Let’s also take into account the fact that there are thousands of articles being read on Medium around the world and multiple people clicking the clap button every second. These could be millions of clap requests from around the world that could probably have been a few hundreds if the claps are debounced. And Medium already does it!

# How to debounce?
This is simple. We just need to wait until all the user interactions are done before executing the code that does all the heavy lifting(eg. handling the API request and response). This essentially means bouncing off heavy operations until user interaction is done, hence debouncing. Let’s understand this better with a flow chart.

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/17194534/271777058-533bb582-2826-4469-8a0a-f82670fab46f.png" alt="Understanding debouncing flow chart" class="img-fluid" />

# Debouncing using Vanilla JS
Assume that we have a simple clap button with an id of 'clap':

```html
<button id="clap" type="button">Clap</button>
```

Now let’s add a click listener on that button:

```js
document.getElementById("clap").addEventListener("click", () => {
  console.log("clicked");
});
```
To achieve debouncing we do it in 2 steps:
1. Deferring the action by `setTimeout` 
2. Clearing and deferring the action again if another event triggers

## Implementing Step 1:
```js
document.getElementById("clap").addEventListener("click", () => {
  // deferring the console.log by 500 milliseconds
  setTimeout(() => {
    console.log("clicked");
  }, 500);
});
```

## Implementing Step 2:
```js
// global variable where we store the return value of setTimeout
let timer = null;

document.getElementById("clap").addEventListener("click", () => {
  // When receiving a new event, clear the existing timer
  clearTimeout(timer);
  
  // deferring the console.log by 500 milliseconds
  timer = setTimeout(() => {
    console.log("clicked");
  }, 500);
});
```
> We defer the click event by 500ms in the `setTimeout` function, but this value can change as needed.

# Creating a reusable function
Let’s say we want to implement debouncing at multiple instances, so let’s create a reusable function for it. We’ll have the 1st parameter of our function as the code that we want to debounce, that is whatever should go inside the `setTimeout`’s callback function and the 2nd parameter as the milliseconds of timeout that we want. This would look something like

```js
// global variable where we store the return value of setTimeout
let timer = null;

const debounce = (func, debounceTime) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    func.apply(this);
  }, debounceTime);
};

document.getElementById("clap").addEventListener("click", () => {
  debounce(() => console.log("clicked"), 500);
});
```

# Debouncing using utility libraries
Writing your own implementation of common functions is good, but it comes with a cost. Unit tests 😈. But if you don’t want to do that a few JS libraries have debouncing implemented. Let’s take an example of debounce using lodash.debounce - [https://www.npmjs.com/package/lodash.debounce](https://www.npmjs.com/package/lodash.debounce)

```js
const debounce = require('lodash.debounce');

const debouncedLog = debounce(() => console.log("clicked"), 500);

document.getElementById("clap").addEventListener("click", () => {
  debouncedLog();
});
```
> Note: the return type of  `debounce` function is a function.

# Conclusion
Debouncing will help you avoid calling a function too frequently. But in production should you be using it from a library or your own implementation?

Well I’d always prefer using it from a utility library, until there are any restrictions in the application to not use any 3rd party code. I would prefer using from the library since this code would be well tested, already being used by a lot of applications in production and if used through a CDN, it can also be cached by the browser. Taking advantage of these points is much better than having our own implementation. 

That’s debouncing for you.