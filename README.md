# discordrep.js
![size](https://img.shields.io/bundlephobia/min/discordrep.js)
![npm](https://img.shields.io/npm/v/discordrep.js)

DiscordRep API


Q: how to get API key?
A: Use the command `-api generate` in our discord server

## Install

```
$ npm install discordrep.js
```

## Usage

### Example
```js
const DiscordRep = require("discordrep.js");
const dRep = new DiscordRep("YOUR_API_KEY_HERE");

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
