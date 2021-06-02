const router = require('express').Router();
const restController = require('../controllers/restController');

router.get('/', async (req, res) => {
    try {
        res.json(await chatController.findAllRests())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});