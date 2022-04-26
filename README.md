

# Save Log File

> This project is done to create a log simple and easy to use by any programmer, the intention is to facilitate the creation and insertion of parameters in a fileLog file

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Table of contents

- [Save dile log](#save-file-log)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Destructuring](#destructuring)
    - [Get All](#get-all)
  - [Authors](#authors)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ npm install save-log-file
```

## Usage

### destructuring

```js
let { settings, logSuccess } = require('save-log-file');

settings(true);
logSuccess('test','this is a test');
```

### get-all

```js
let saveLogFile = require('save-log-file');

saveLogFile.settings(true);
saveLogFile.logSuccess('test','this is a test');
```

`Functions`

| Type | values | Description |
| --- | --- | --- |
| settings | boolean | Set true if you want print in console |
| logSuccess | string, string | The first parameter is the function and the other is the description, print de success log |
| logInfo | string, string | The first parameter is the function and the other is the description, print de info log |
| logError | string, string | The first parameter is the function and the other is the description, print de error log |
| logWarning | string, string | The first parameter is the function and the other is the description, print de warning log |
| logFatal | string, string | The first parameter is the function and the other is the description, print de fatal log |

## Authors

* **Oscar Johnson** - *Initial work* - [Oscar Johnson](https://github.com/ojohsnon)



