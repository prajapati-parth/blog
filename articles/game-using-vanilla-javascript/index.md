---
title: "Creating a game using Vanilla JavaScript"
date: "2023-09-23T16:40:00.000Z"
layout: post
path: "game-using-vanilla-javascript"
theme: "greenGradient"
categories:
  - game development
  - vanilla JS
previous:
  - Joining Aera Technology
  - /joining-aera
  - blueGradient
next: ""
excerpt: "Game development is something that uses Math. A good amount of Math. I've been doing web development for around more than 8 years now, where technical and domain challenges have been a part of my daily work. But solving Math problems isn't something"
---

_Note:_

_1. There will be no code in this blog post. Just concepts, approach, little discussion about the project and a few important links._  
_2. This blog will discuss concepts to create a simple 2d game. A few of the things might automatically be handled in some advanced game engines but it is always good to know how these things work._

# Introduction

Game development is something that uses Math. A good amount of Math. I've been doing web development for around more than 8 years now, where technical and domain challenges have been a part of my daily work. But solving Math problems isn't something that I face a lot. That plus I love gaming as well. That got me like, why not create a game by myself.

# Starting it slow

Focusing just on the concepts for building games, I did not want to do a lot of project setup, code compilation or code builds. I wanted to write code and see it quickly run. So just a simple html file, `index.html`. This file requesting a CSS file with minimum styles. And a JS file, containing vanilla JS code, no packages, no type checking, no linters and non modular code. Everything just in a single JS file. Maybe I’m just lazy and like spaghetti code. 🙂

This is what the file structure of my project will look like. Just open the `index.html` file in the browser and the game just works. Easy to deploy as well. Good ol’ times eh!

<img src="https://user-images.githubusercontent.com/17194534/270102699-bfcacbee-1ee0-431f-bfb8-2ea4476ce092.png" alt="folder-structure" class="img-fluid" />

# Code and deployed application links

Here’s the code repository link if you want to directly jump into code

- [https://github.com/prajapati-parth/click-to-kill](https://github.com/prajapati-parth/click-to-kill)

The deployed application (best enjoyed on a desktop screen or landscape mode of phone)

- [https://clickill.netlify.app](https://clickill.netlify.app)

> I just love hosting my applications on Netlify considering how simple and easy it is to use.

# A few game development concepts

Some general concepts that we should come across frequently when doing game development:

- Working with sprite images
- How to generate 2d world with parallax scrolling
- Collision detection
- Animating characters in your game
- Making the game more dynamic by leveling up and increasing difficulty

## Sprite images

Sprite image is a collection of many images clubbed together as a single image and single image used by providing x & y positions for the image and how much width and height from x & y to render. Game development mostly uses sprite images to render moving players, enemies or any object on the screen that has a repetitive motion.

Sprite images help save bandwidth being comparatively smaller in size and avoid making multiple requests to fetch individual images. To be more efficient we could even club all the images present in the `/assets` folder into a single sprite image and serve it over the network only once. But that’s a story for another day.

This reminds me of a meme I saw a few years ago.

<img src="https://user-images.githubusercontent.com/17194534/270102647-983f6371-92e8-402c-9af3-37250e54c186.jpeg" alt="mario-meme-image" class="img-fluid" />

## Rendering world using Parallax scrolling

In this game, we use multiple 2d images representing different layers of the world which are moving at varying speeds from each other to provide an illusion that the character is moving in the game. Kind of like this image, where each shade of blue is a layer that is moving at a different speed compared to other layers.

<img src="https://user-images.githubusercontent.com/17194534/270102648-4d1d0a04-f44c-4f98-b070-bc0882b67a88.gif" alt="parallax-scrolling-world" class="img-fluid" />

## Collision detection

Collision is a very important part of any game. At some point of time in the game we might want to detect a collision between objects. It can be between a player and an enemy, a player and a bullet, an enemy and a bullet, between two bullets or even between a player and an object in the world(eg. Mario hitting bricks with his hand or Mario jumping and standing on a pipe).

The end goal here is to detect collisions, but the implementation can vary. Eg. Creating an invisible box(collision box) around objects and detecting if any collision boxes overlap or touch each other collision box.

## Animating on each frame change

In this JavaScript game, we draw objects on the screen on every frame render. And also calculate collision, next position of the player/s, enemy/s, bullets, etc., next animation frame of the character from sprite image and many more changes like score.

This might sound very overwhelming, but more on this in a step by step blog series where I’ll explain more in detail. For now let’s know this that we’ll be using the function `window.requestAnimationFrame()` like below

```js
const animate = () => {
  console.log("animate");
  requestAnimationFrame(animate);
};

animate();
```
<br />

## Updating score and game end condition

> “The power to destroy a thing is the absolute control over it.” -- Frank Herbert, Dune

This is a crucial part of a game and depends on the concept of the game in general. But this is something that completes a game and makes it competitive. In the game I’ve created,

- End condition - if the enemy touches the left end of the screen before you click to kill, it's game over.
- Score update - Each kill is a 1 point. No upper limit on the score for now. 😉

## Leveling up and increasing difficulty

To avoid getting the game in an unending scenario, it is required to increase the difficulty after the user has played the game for some time or has crossed some score. This again depends on the concept of the game but some of the general ideas here are:

- Increasing the spawning speed of enemies
- Making the enemy or it’s bullets more difficult to tackle
- Spawning enemies with more hit points
- Increasing the number of enemies being spawned (the concept in this game)
- Changing levels and making the world more difficult

In our game, we use a single world but we do increase the number of enemies being spawned. The logic here is that we reduce the time to spawn the enemies by a fixed amount every 5 enemy kills.

> There’s a loophole here in the logic of increasing difficulty. Can you find it?

# A few JavaScript concepts to know before starting with code
Just JavaScript, nothing else. 

## Rendering sprite images and animating motion on canvas using JavaScript

We use HTML’s canvas element to draw and animate images on the screen and sprite images to animate characters and draw them on canvas. To animate the enemies, eg. the flapping of the wings of Bat enemy, we must show the next image from the bat’s sprite image on each request of frame to make it look like the Bat is flapping its wings.

## Basic Math to randomize enemy or player and it’s movement

In this game, the enemy spawning and movement is randomized. To spawn an enemy Bat, Bee or Dragon is randomized by using `Math.random()` and the oscillatory movement of the enemies is done by using `Math.sin()` and `Math.cos()`. More combination and Math logic can be used to give particular characteristics to enemies.

## Object oriented concepts

This is fairly straightforward and mostly known to many of the developers. But it is worth a mention. This lays the foundation for future modularization of code and making it more understandable and easy to refactor by separating logic in different classes.

We use concepts like method overriding and inheritance here. Eg. class `Enemy` is inherited by class `Bat`, `Bee` and `Dragon` which overrides `update()` method.

# Closing note

This is a simple to understand game with not a lot of user interaction and covers a lot of basic concepts. Each subsection here can be detailed to a blog of it’s own and there’s also a lot of improvement that can be done to make the game more interactive like

- Adding better leveling up logic with proper feedback to the user
- Better development setup like using TypeScript, HMR(hot module reload), modular code, etc. (this to follow in latter blogs)
- A leaderboard system to save high scores, and so on…

But for now, “That’s all Folks!”.
