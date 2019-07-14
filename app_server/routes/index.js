var express = require('express');
var router = express.Router();
var ctrlLocations = require("../controllers/locations");
var ctrlOhters = require("../controllers/others");

/* Страницы местоположений */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Другие страницы */ 
router.get('/about', ctrlOhters.about);

module.exports = router;
