const express = require('express');
const router = express.Router();

// Routes
router.get('', (req, res) => {
    const locals = {
        title: "Express Blog",
        description: "Blog made with Express.js and MongoDB"
    }

    res.render('index', { locals });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = router;