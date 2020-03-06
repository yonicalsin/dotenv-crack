# 📚 Cogenv

<img src="https://i.ibb.co/NrZJHgb/box-1.png" alt="cogenv" align="right" />

Cogenv is a zero-dependency module that powers the environment variables of an `.env` file in`process.env`. Cogenv brings functions that will make your project powerful !

Cogenv under the hood use `dotenv` and `dotenv-expand` !

<p >
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
   <a href="https://github.com/yoicalsin/cogenv" title="All Contributors"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
   <a href="https://github.com/yoicalsin/cogenv"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
   <a href="https://www.npmjs.com/cogenv" target="_blank">
   <img src="https://img.shields.io/npm/v/cogenv" alt="NPM Version" /></a>
   <a href="https://www.npmjs.com/cogenv" target="_blank">
   <img src="https://img.shields.io/npm/l/cogenv" alt="Package License" /></a>
   <a href="https://www.npmjs.com/cogenv" target="_blank">
   <img src="https://img.shields.io/npm/dm/cogenv" alt="NPM Downloads" /></a>
   <a href="https://github.com/yoicalsin/cogenv" target="_blank">
   <img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
   <a href="https://github.com/yoicalsin/cogenv"><img src="https://img.shields.io/badge/Github%20Page-cogenv-yellow?style=flat-square&logo=github" /></a>
   <a href="https://github.com/yoicalsin"><img src="https://img.shields.io/badge/Author-Yoni%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
   <a href="https://twitter.com/yoicalsin" target="_blank">
   <img src="https://img.shields.io/twitter/follow/yoicalsin.svg?style=social&label=Follow"></a>
</p>

## Install

```bash
# with npm
npm install cogenv

# or with Yarn
yarn add cogenv


# Per
```

## Usage

First we have to create an `.env' file for it to work properly !

```bash
# Application data
APP_NAME=Cogenv
APP_PORT=3000

# Author Data
AUTHOR_NAME=Yoni Calsin
AUTHOR_TWITTER=https://twitter.com/yoicalsin
AUTHOR_GITHUB=https://github.com/yoicalsin
```

## Introduction to the `getEnv' function.

In order to use the getEnv function we will import from cogenv, as follows !

The function getEnv once instantiated will return a function that will allow you to access the environment variables.

If the environment variable doesn't exist, it will take the variable you are adding with a parameter.

While this prevents it from breaking if the `.env' file doesn't exist.

```ts
import { getEnv } from 'cogenv';

// These are the default variables, they will be used if the environment variable does not exist !
var defaultData = {
   APP_NAME: 'Application',
   APP_PORT: 8080,
   APP_URL: 'http://localhost:8080',
};
var get = getEnv(defaultData);

var appName = get('APP_NAME');
console.log(appName);
// Result: Cogenv

var appUrl = get('APP_URL');
console.log(appUrl);
// Result: http://localhost:8080
```

## Introduction to the function of `getEnvOne'.

This function is very useful, to bring a variable of environment individually !

The getEnvOne function returns _undefined_ if it does not exist, as follows !

```js
import { getEnvOne } from 'cogenv';

const appName = getEnvOne('APP_NAME');
console.log(appName);
// Result: Cogenv
```

Now let's try with a variable that doesn't exist in the **.env**, let's try with `AUTHOR_COUNTRY`, as I mentioned this will return a `undefined` value.

> NOTE: Remember that we're using the [variables](#usage) we declared earlier !

```ts
const authorCountry = getEnvOne('AUTHOR_COUNTRY');

console.log(authorCountry);
// Result: undefined
```

## Introduction to the function of `getEnvObject'.

This function returns an object to you, and also receives a default variable object in case they don't exist !

Okay, let's try it out

Let's see the first example, we will bring all the variables of the author !

> NOTE: Remember that the variables we declare in this [section](#usage)

Remember that the default object is mandatory !

```ts
import { getEnvObject } from 'cogenv';

const defaultData = {
   AUTHOR_NAME: 'Author Name',
   AUTHOR_TWITTER: '@author',
   AUTHOR_GITHUB: '@author',
};

const authorData = getEnvObject(defaultData);
console.log(authorData);
// Result:
/*

{
   AUTHOR_NAME: 'Yoni Calsin',
   AUTHOR_TWITTER: 'https://twitter.com/yoicalsin',
   AUTHOR_GITHUB: 'https://github.com/yoicalsin',
};

*/
```

If you want to customize the index name of one, if there's a solution, here's how !

We'll have to add this way _AUTHOR_NAME_ `|`_name_
you can also use **'|'** or **'@'**

```ts
const defaultData = {
   'AUTHOR_NAME|name': 'Author Name',
   'AUTHOR_TWITTER|twitter': '@author',
   'AUTHOR_GITHUB|github': '@author',
};

const authorData = getEnvObject(defaultData);
console.log(authorData);

// Result:
/*

{
   name: 'Yoni Calsin',
   twitter: 'https://twitter.com/yoicalsin',
   github: 'https://github.com/yoicalsin',
};

*/
```

## ⭐ Support for

Cogenv is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyonicb@gmail.com).

## 🎩 Stay in touch

-  Author [Yoni Calsin](https://github.com/yoicalsin)
-  Twitter [Yoni Calsin](https://twitter.com/yoicalsin)

## 📜 License

Cogenv is [MIT licensed](LICENSE).
