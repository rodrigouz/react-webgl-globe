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

# Getting Started

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
## Demo Mode
```sh
$ cd example
$ npm i && npm start 
```

# Usage
Instruction to install the npm package `react-webgl-globe` and how to use it.

```sh
npm install react-webgl-globe 

```

## Data prop Format

The following illustrates the **data** prop format that the React WebGL Globe expects in order to render the geographic data provided.

```javascript
const data =  [ latitude, longitude, magnitude, latitude, longitude, magnitude, ... ];
```
## How to provide data prop

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://codesandbox.io/s/react-webgl-globe-t90xf9)

```javascript
import React, { useEffect, useState } from "react";
import { Globe } from "react-webgl-globe";

function GlobeContainer() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://raw.githubusercontent.com/dataarts/webgl-globe/master/globe/population909500.json",
      true
    );
    xhr.onreadystatechange = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          setData(data[0][1]);
        }
      }
    };
    xhr.send(null);
  }, []);

  return (
    <div className="App">
      <Globe
        data={data}
        title="population"
        format="magnitude"
        animated={false}
        width={800}
        height={480}
      />
    </div>
  );
}

export { GlobeContainer };
```
