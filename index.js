var cloudscraper = require('cloudscraper');

class DRep {

    getUser(id) {
        return req('u', id)
    }
    getBan(id) {
        return req('bans', id)
    }
    getWarn(id) {
        return req('warns', id)
    }
};


async function req(route, id) {
    let data;
    await cloudscraper.get(`https://discordrep.com/api/${route}/${id}`)
        .then(function(body) {
            data = JSON.parse(body)

        })
        .catch(function(err) {
            if (err.statusCode == 404 || err.statusCode == 429) {
                data = JSON.parse(err.error)
            } else {
                return console.log(err)
            }
        });
    return data
}

module.exports = DRep
