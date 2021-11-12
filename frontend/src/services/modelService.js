const axios = require('axios')

const getLabels = () => {
    return axios.get('/tfjs/labels.json').then(response => response.data)
}

const getSymptoms = () => {
    return axios.get('/tfjs/symptoms.json').then(response => response.data)
}

const getWeights = () => {
    return axios.get('/tfjs/weights.json').then(response => response.data)
}

const modelService = { getLabels, getSymptoms, getWeights }

module.exports = modelService