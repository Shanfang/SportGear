var express = require('express');
var router = express.Router();

router.get('/shorts', function (req, res, next) {
    res.send(`GET request successful. Checkout our new shorts!`);
});
router.post('/shorts', function (req, res, next) {
    res.send(`POST request successful.`);
});

module.exports = router;