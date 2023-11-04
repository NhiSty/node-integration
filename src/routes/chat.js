const express = require('express')
const OpenAIChat = require('../utils/Openai.js');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

const openaiChat = new OpenAIChat(process.env.OPENAI_API_KEY,);

router.post('/', async (req, res) => {
    try {
        const { message } = req.body;
        const response = await openaiChat.sendMessage(message);
        const conversation = await openaiChat.getConversation();

        res.status(200).json({ conversation });
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;