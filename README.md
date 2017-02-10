#Genesis evolutionary music web interface

Uses:

## [Angular 2](https://angular.io) application with [angular2-materials](https://material.angular.io/).
## [JSPM](http://jspm.io/) for development setup
## [Ahead Of Time](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) production bundle,
      that ensures fast loading in production.
## [Firebase][https://firebase.google.com/] is used for the database and hosting 


## Setup

Go into the genesis_web/public folder:

For development remember to run:

```
npm install
npm run jspminstall
```

for installing dependencies.

Use index_dev.html for development

## Production bundle creation

The production bundle is created using Ahead Of Time compilation ( https://angular.io/docs/ts/latest/cookbook/aot-compiler.html ).
This way we don't need to include the angular compiler at runtime, neither does the templates need to be compiled
as they are translated to javascript instructions that generates the page programatically. This is one of the reasons Angular 2 
is both faster and lighter than many alternative frameworks (and also faster and lighter than not using any framework at all).

To build a production bundle (aot-build.min.js) for running in index.html type:

```
npm run dist
```

## Test environment

To start a simple web server for testing type:

```
npm run devserver
```

This will start a webserver at http://localhost:3000

(remember to go to index_dev.html if you're developing)
