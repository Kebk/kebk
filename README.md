# kebk

## what is it?

Kebk is the project for my graduation projects, it's designed to provide a platform for users and suppliers to trade. I've already completed part of it but it's not perfect, and I'll improve the project with my rest time to finish it.

The client of kebk is design for a e-commerce website.It provides products for user to choose and manager users' orders and users' personal information. Users can register to browse and purchase goods whatever they want.

The CMS of kebk is order to manage information such as users, suppliers, products, order, etc.

The server provides server for client and cms, so the system of kebk can be run mormally.

## stack

### client && cms

Built using `vue-cli@3`.Coding using `vue`, `vue-router`, `vuex`, `axios`.

### server

Written in Node.js, and using the framework `koa`. The database is `mongodb`, using `mongoose` to operate database. It provides api for client and cms, separate models and controllers.

## usage

```sh
# client
npm install
npm run dev

# cms
npm install
npm run dev

# server
npm install
npm run nodemon
```

## Licence

[MIT](LICENCE)
