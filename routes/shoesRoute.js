var express = require('express');
var router = express.Router();

router.get('/shoes', function (req, res, next) {
    res.send(`GET request successful. Checkout our new shoes!`);
});
router.post('/shoes', function (req, res, next) {
    res.send(`POST request successful.`);
});

module.exports = router;

// const routes= (app) => {
//     app.route('/shoes')
//     .get((req, res) =>
//     res.send(`GET request successful. Checkout our new shoes!`))

//     .post((req, res) =>
//     res.send(`POST request successful`));
// };

// export default routes;