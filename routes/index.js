var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('dashboard', { title: 'Dashboard' });
});
router.get('/m', function(req, res, next) {
    res.render('materialize', { title: 'Dashboard' });
});

module.exports = router;