# discordrep.js
![size](https://img.shields.io/bundlephobia/min/discordrep.js)
![npm](https://img.shields.io/npm/v/discordrep.js)

DiscordRep API

## Install

```
$ npm install discordrep.js
```

## Usage

### Example
```js
const DiscordRep = require("discordrep.js");
const dRep = new DiscordRep();

async function getUserData(id) {
    let userData = await dRep.getUser(id);
    console.log(userData)
}


getUserData('1')

```

```js
getUser('id')

getBan('id')

getWarn('id')

```
