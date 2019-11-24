var cloudscraper = require('cloudscraper');

class DRep {

    constructor(key) {
      this.key = key;
    }

    getRep(id) {
        return req('rep', id, this.key);
    }
    getUser(id) {
        return req('u', id, this.key);
    }
    getBan(id) {
        return req('bans', id, this.key);
    }
    getWarn(id) {
        return req('warns', id, this.key);
    }
};


async function req(route, id, key) {
    let data;
    await cloudscraper.get(`https://discordrep.com/api/${route}/${id}?authorization=${key}`)
        .then(function(body) {
            data = JSON.parse(body)
        })
        .catch(function(err) {
            if (err.statusCode == 404 || err.statusCode == 429 || err.statusCode == 401) {
                data = JSON.parse(err.error)
            } else {
                return console.log(err)
            }
        });
    return data
}

module.exports = DRep
