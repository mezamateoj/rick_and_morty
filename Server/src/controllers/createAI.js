const express = require('express')
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
const { OPENAI_API_KEY } = process.env;

const createImg = express.Router()

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


createImg.post('/create', async (req, res) => {
    console.log('received', req.body)
    const { prompt } = req.body
    const response = await openai.createImage({
        prompt,
        n:1,
        size: "512x512"
    });

    console.log('OpenAI response:', response);

    if(response) {
        image_url = response.data.data[0].url
        console.log(image_url)
        return res.send(image_url)
    }

    return res.send("Image couldn't process")
})



module.exports = createImg;
