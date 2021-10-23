var axios = require("axios").default;

var options = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/advancedsearch',
    params: {
        start_year: '1970',
        end_year: '2020',
        min_imdb: '6',
        max_imdb: '7.8',
        genre: 'action',
        language: 'english',
        type: 'movie',
        sort: 'latest',
        page: '1'
    },
    headers: {
        'x-rapidapi-host': 'ott-details.p.rapidapi.com',
        'x-rapidapi-key': '84be1cd6e9msh5693132e3a9fd73p174a5ejsn8280274a2b67'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});