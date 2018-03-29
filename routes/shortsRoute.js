var express = require('express');
var router = express.Router();

router.get('/shorts', function (req, res, next) {
    res.send(`GET request successful. Checkout our new shorts!`);
});

router.post('/shorts', function (req, res, next) {
    res.send(`POST request successful.`);
});

router.put('/shorts', function(req, res, next) {
    res.send(`PUT request successful.`)
});

router.delete('/shorts', function(req, res, next) {
    res.send(`DELETE request successful.`)
})
module.exports = router;