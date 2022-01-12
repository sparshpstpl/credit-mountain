
#### Prerequisites

First to ensure your backend server is up

Before you begin, make sure your development environment includes `Node.js®` and an `npm` package manager.

###### Node.js
Angular ^12.2.11 requires `Node.js` version 10.13 or later.

- To check your version, run `node -v` in a terminal/console window.
- To get `Node.js`, go to [nodejs.org](https://nodejs.org/).

###### Angular CLI
Install the Angular CLI globally using a terminal/console window.
```bash
npm install -g @angular/cli
```
    

## Installation

# install app's dependencies
$ npm install
```
# update backend end point on proxy.conf.json

for eg : your api endpoint is : http://localhost:3001  so 

  {
    "/": {
      "target": "http://localhost:3001",
      "secure": false,
      "logLevel": "debug",
      "changeOrigin": true
    }
}

## Usage

``` bash
# serve with hot reload at localhost:4200.
$ ng serve

# build for production with minification
$ ng build