var express = require('express');
var router = express.Router();
var version= require('../package.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , version:version.version});

});


router.get('/Principios', function(req, res, next) {
  res.render('principios', { title: 'Express' });
});

router.get('/Typo', function(req, res, next) {
  res.render('typo', { title: 'Express' });
});
router.get('/Colors', function(req, res, next) {
  res.render('colors', { title: 'Express' });
});

router.get('/grid', function(req, res, next) {
  res.render('grid', { title: 'Express' });
});
router.get('/spacing', function(req, res, next) {
  res.render('spacing', { title: 'Express' });
});

router.get('/animations', function(req, res, next) {
  res.render('animation', { title: 'Express' });
});

//------------------------------------------------- COMPONENTES
router.get('/navbar', function(req, res, next) {
  res.render('components/navbar', { title: 'Express' });
});



router.get('/whats_new', function(req, res, next) {
  res.render('news', { title: 'Express' , version:version.version});
});



module.exports = router;
