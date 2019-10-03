'use strict';

var express = require('express');

var router = express.Router();



/* GET home page. */

router.get('/', function (req, res) {

    res.render('Bro', { title: 'Bro', comment: 'My bro is 15 year old' });

});



module.exports = router;