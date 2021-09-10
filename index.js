const express = require('express')

const morgan = require('morgan')
const axios = require('axios')

const app = express()

let port = 8080

app.use(express.json())
app.use(morgan('dev'))

app.get('/personaje', (req, res) => {
    const END_POINT = 'https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/shadow919?api_key=RGAPI-a7ba3ea5-6688-4b58-87bc-6c1c3fee3718'
    axios.get(END_POINT)
        .then(function(response) { 

            res.json(response.data)
        })
        .catch(function (error){
            const error_code = error.response.status
            const { message } = error
            res.status(error_code).json({ message })
        })
})

app.get('/maestria', (req, res) => {
    const END_POINT = 'https://la1.api.riotgames.com/lol/champion-mastery/v4/scores/by-summoner/Ng09V01Y5ypk5fbJ2yYQxtsyu4x5hWOCeKKzdQ9Uwc_KXw?api_key=RGAPI-a7ba3ea5-6688-4b58-87bc-6c1c3fee3718'
    axios.get(END_POINT)
        .then(function(response) {
            
            console.log(response.data);
            res.json({maestrias: response.data})
            //res.send( `${ response.data}`)
        })
        .catch((error) => res.send(error))
})

app.get('/rankedtft', (req, res) => {
    const END_POINT = 'https://la1.api.riotgames.com/tft/league/v1/entries/by-summoner/Ng09V01Y5ypk5fbJ2yYQxtsyu4x5hWOCeKKzdQ9Uwc_KXw?api_key=RGAPI-a7ba3ea5-6688-4b58-87bc-6c1c3fee3718'
    axios.get(END_POINT)
    .then(function(response) { 

        res.json(response.data)
    })
    .catch(function (error){
        const error_code = error.response.status
        const { message } = error
        res.status(error_code).json({ message })
    })
})

app.get('/personaje-y-maestria', (req, res) => {
    const END_POINT = 'https://la1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/Ng09V01Y5ypk5fbJ2yYQxtsyu4x5hWOCeKKzdQ9Uwc_KXw/by-champion/32?api_key=RGAPI-a7ba3ea5-6688-4b58-87bc-6c1c3fee3718'
    axios.get(END_POINT)
    .then(function(response) { 

        res.json(response.data)
    })
    .catch(function (error){
        const error_code = error.response.status
        const { message } = error
        res.status(error_code).json({ message })
    })
})

app.get('/todas-maestrias', (req, res) => {
    const END_POINT = 'https://la1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/Ng09V01Y5ypk5fbJ2yYQxtsyu4x5hWOCeKKzdQ9Uwc_KXw?api_key=RGAPI-a7ba3ea5-6688-4b58-87bc-6c1c3fee3718'
    axios.get(END_POINT)
    .then(function(response) { 

        res.json(response.data)
    })
    .catch(function (error){
        const error_code = error.response.status
        const { message } = error
        res.status(error_code).json({ message })
    })
})

app.post('/personaje/select', (req, res) => {
    const {personaje} = req.body
    const END_POINT = 'https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name'
    const INTO_POINT = '?api_key=RGAPI-a7ba3ea5-6688-4b58-87bc-6c1c3fee3718'
    
    console.log(`${END_POINT}/${personaje}${INTO_POINT}`)
    axios.get(`${END_POINT}/${personaje}${INTO_POINT}`)
        .then(function (response){
            if (personaje == undefined||personaje == null||personaje == "")
            res.status(404).json( "error en el parametro uwu" )
  
            res.send(response.data)
        })
        .catch(function (error){
            const error_code = error.response.status
            const { message } = error
            res.status(error_code).json({ message })
        })
})

app.post('/personaje/ranked', (req, res) => {
    const {ranked} = req.body
    const END_POINT = 'https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner'
    const INTO_POINT = '?api_key=RGAPI-a7ba3ea5-6688-4b58-87bc-6c1c3fee3718'
    
    console.log(`${END_POINT}/${ranked}${INTO_POINT}`)
    axios.get(`${END_POINT}/${ranked}${INTO_POINT}`)
        .then(function (response){
            
            res.send(response.data)
        })
        .catch(function (error){
            const error_code = error.response.status
            const { message } = error
            res.status(error_code).json({ message })
        })
})

app.post('/personaje/id', (req, res) => {
    const {id} = req.body
    const END_POINT = 'https://la1.api.riotgames.com/lol/summoner/v4/summoners'
    const INTO_POINT = '?api_key=RGAPI-a7ba3ea5-6688-4b58-87bc-6c1c3fee3718'
    
    console.log(`${END_POINT}/${id}${INTO_POINT}`)
    axios.get(`${END_POINT}/${id}${INTO_POINT}`)
        .then(function (response){
            
            res.send(response.data)
        })
        .catch(function (error){
            const error_code = error.response.status
            const { message } = error
            res.status(error_code).json({ message })
        })
})

app.post('/TFT/top', (req, res) => {
    const {top} = req.body
    const END_POINT = 'https://la1.api.riotgames.com/tft/league/v1/rated-ladders'
    const INTO_POINT = '/top?api_key=RGAPI-a7ba3ea5-6688-4b58-87bc-6c1c3fee3718'
    
    console.log(`${END_POINT}/${top}${INTO_POINT}`)
    axios.get(`${END_POINT}/${top}${INTO_POINT}`)
        .then(function (response){
            
            res.send(response.data)
        })
        .catch(function (error){
            const error_code = error.response.status
            const { message } = error
            res.status(error_code).json({ message })
        })
})

app.post('/lol/top', (req, res) => {
    const {lol} = req.body
    const END_POINT = 'https://la1.api.riotgames.com/lol/league/v4/masterleagues/by-queue'
    const INTO_POINT = '?api_key=RGAPI-a7ba3ea5-6688-4b58-87bc-6c1c3fee3718'
    
    console.log(`${END_POINT}/${lol}${INTO_POINT}`)
    axios.get(`${END_POINT}/${lol}${INTO_POINT}`)
        .then(function (response){
            
            res.send(response.data)
        })
        .catch(function (error){
            const error_code = error.response.status
            const { message } = error
            res.status(error_code).json({ message })
        })
})

app.listen(port, () => {
    console.log("server running en el puerto" +  port);
})