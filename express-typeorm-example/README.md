# An example of how to create a json API with express and typeorm

## Quick start
```
$ npm install

$ npx tsc
$ node dist/app.js

// Or
$ npx tsc; node dist/app.js
```

## Database config
The database config is located in [./src/app-data-source.ts](./src/app-data-source.ts).


## Main codes
The main codes are located in 
* [./src/modules/store/store.router.ts](./src/modules/store/store.router.ts)
* [./src/modules/store/store.controller.ts](./src/modules/store/store.controller.ts)
* [./src/modules/store/store.service.ts](./src/modules/store/store.service.ts)
* [./src/modules/store/store.service.ts](./src/modules/store/store.entity.ts)


## Database scheme and Test API
[See here.](../README.md)