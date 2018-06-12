'use strict';

var path = require('path');
var request = require('request');

//let API = "http://localhost:9080";
let API = "http://209.97.138.183:9080";

module.exports = {

    index(req, res) {
        res.sendFile(path.resolve('./../release/index.html'));
    },

    service(req, res) {
        console.log('service', req.params);
        request.get({url: `${API}/site/services/${req.params.url}${req.params['0']}`, json: true}, function (e, r, body) {
            //standardData.content = body
            console.log(body);
            res.send(body);
        })
    },
};