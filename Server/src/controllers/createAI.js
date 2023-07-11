require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");



// const createAI = express.Router()
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});



const openai = new OpenAIApi(configuration);

const createAI = async (req,res) => {
        const { prompt } = req.body
        console.log('promt ' + prompt)
    try {
        const response = await openai.createImage({
            prompt,
            size: "512x512",
            n:1,
        });
        
        console.log('OpenAI response:', response);
        
        if(response) {
            const image_url = response.data.data[0].url
            
            return res.status(200).send({src: image_url})
        }
        
    } catch (error) {
        console.log('Error:', error);
        return res.status(500).send({error})
        
    }
}


module.exports = createAI;
