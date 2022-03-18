The React WebGL Globe is an open source react component  for geographic data visualization. Under the hood uses [WebGL Globe](https://github.com/sw-yx/react-typescript-cheatsheet/) instance created by the Google Data Arts Team. 

![](https://raw.githubusercontent.com/rodrigouz/react-webgl-globe/master/globe.png)

----

**The React WebGL Globe** supports data in `JSON` format, a sample of which you can find [here](https://github.com/dataarts/webgl-globe/blob/master/globe/population909500.json) also makes heavy use of the [Three.js library](https://github.com/mrdoob/three.js/).




# Prerequisites

This project requires NodeJS (version 10 or later) and Yarn.
[Node](http://nodejs.org/) and [Yarn](https://yarnpkg.com/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && yarn -v
8.5.1
1.22.5
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installation

Start with cloning this repo on your local machine:

```sh
$ git clone git@github.com:rodrigouz/react-webgl-globe.git
$ cd react-webgl-globe
```
Use yarn to install all the dependencies.
```sh
$ yarn 
```

# Data Format

The following illustrates the `JSON` data format that the globe expects:

```javascript
const data =  [ latitude, longitude, magnitude, latitude, longitude, magnitude, ... ];
```