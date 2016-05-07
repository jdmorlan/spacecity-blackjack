# Modern Boilerplate

This is a very basic boilerplate that I am using to develop
modern Javascript applications.

## React Components

All React components should go in the `app/components` folder.

## React Router

The `app/index.js` file is setup to load the defined routes found
at `app/config/routes.js`. Routes are configured with React Router.
If you need an introduction check out the
[Github Repo](https://github.com/reactjs/react-router)

## Stylesheets

I haven't bought into the whole `inline-styles` concept yet. So, I still
use basic SASS stylesheets. The `main.scss` file is used to import all
the stylesheets found in the `sass` folder.

The organization for stylesheets is based on
[SASS Architecture Guidelines](http://sass-guidelin.es/#architecture)

## Tests

Modern Boilerplate uses `mocha` as its test runner. Your tests should go
into the `/tests` folder and have the following naming convention:

`/tests/{testName}.test.js`
