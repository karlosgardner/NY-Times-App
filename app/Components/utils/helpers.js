
var axios = require("axios");

var key = '58b7b729a8f74a0b86326c33a5c81568',
    endpoint = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';


var helpers = {
    getData: function (search, start, end) {
        var queryURl = endpoint + "&api-key=" + key + "&q=" + search + "&begin_date=" + start + "&end_date=" + end;
        //console.log(queryURl);

        return axios.get(queryURl).then(function (val) {

            return val.data.response.docs;
        });
    }
};


module.exports = helpers;