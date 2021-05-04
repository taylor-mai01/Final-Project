//Could not figure out how to get this to run
//Taylor Maiorini
var express = require("express");
var router = express.Router();
var router = require('./routes/routes.js');

router.get('/questions', async (req, res) => {
    try {
        const questions = await Question.find()
        return res.status(200).json(questions)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
});
