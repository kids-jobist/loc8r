var express = require('express');
var router = express.Router();
var ctrlLocations = require("../controllers/locations.js");
var ctrlOhters = require("../controllers/others.js");

/* Страницы местоположений */
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Другие страницы */ 
router.get('/about', ctrlOhters.about);

module.exports = router;
