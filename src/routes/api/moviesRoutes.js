const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');


router.post('/create', moviesController.create);
//router.delete('/movies/delete/:id', moviesController.destroy);

module.exports = router;