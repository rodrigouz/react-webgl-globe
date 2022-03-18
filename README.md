The React WebGL Globe is an open source react component  for geographic data visualization. Under the hood uses [WebGL Globe](https://github.com/sw-yx/react-typescript-cheatsheet/) instance created by the Google Data Arts Team. 

![](https://raw.githubusercontent.com/rodrigouz/react-webgl-globe/master/globe.png)

----

**The React WebGL Globe** supports data in `JSON` format, a sample of which you can find [here](https://github.com/dataarts/webgl-globe/blob/master/globe/population909500.json) also makes heavy use of the [Three.js library](https://github.com/mrdoob/three.js/).




# Prerequisites

This project requires NodeJS (version 14 or later).
[Node](http://nodejs.org/) is really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ node -v && npm -v
v14.17.5
8.5.1
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installation

Start with cloning this repo on your local machine:

```sh
$ git clone git@github.com:rodrigouz/react-webgl-globe.git
$ cd react-webgl-globe
```
Use npm to install all the dependencies.
```sh
$ npm i 
```
**Demo Mode**
```sh
$ cd example
$ npm i && npm start 
```


## Data Format

The following illustrates the **data** prop format that the React WebGL Globe expects in order to render the geographic data provided.

```javascript
const data =  [ latitude, longitude, magnitude, latitude, longitude, magnitude, ... ];
```