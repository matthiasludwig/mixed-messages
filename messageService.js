const axios = require('axios');

const jokeUrl = "https://geek-jokes.sameerkumar.website/api?format=json";
const swansonUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
const opinionUrl = "https://opinionated-quotes-api.gigalixirapp.com/v1/quotes";

const getJoke = () => {
    return axios.get(jokeUrl);
}

const getSwanson = () => {
    return axios.get(swansonUrl);
}

const getOpinion = () => {
    return axios.get(opinionUrl);
}

exports.getJoke = getJoke;
exports.getSwanson = getSwanson;
exports.getOpinion = getOpinion;