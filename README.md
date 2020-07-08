# This package has been deprecated
#### This package will no longer work after V3 update, please use [@drep/api](https://www.npmjs.com/package/@drep/api)

## discordrep.js
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

async function fetchRep(id) {
    let userData = await dRep.getRep(id);
    console.log(userData)
}

fetchRep('538855659714641960')

 /*
 console output:
 {
   "id": "538855659714641960",
   "upvotes": 13,
   "downvotes": 0,
   "reputation": 3,
   "xp":12409
}
*/

```

```js

getRep('id') // gets user's reputation

getUser('id') // gets general info exp: bio/donator...

getBan('id') // Checks if user is banned and returns ban info

getWarn('id') // Checks if user is warned and returns warn info

```
