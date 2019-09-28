var express = require('express');
var router = express.Router();

const Blood_db = require('../models/blood_detail')
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Save blood' });
});


router.post('/view-information', function(req, res) {
  console.log('searching,,,,,,,,,', req.body.invoice_code)

  
  Blood_db.findOne({ invoice_no: req.body.invoice_code }, function (err, bloodDetail) {
    console.log('searched...........', bloodDetail);
    res.render('view-information', {bloodDetail});

    if (err) throw err
  })
});

module.exports = router;
