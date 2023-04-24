const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res) => {
  const moviesfromDB = await Movie.find();
  res.render('movies', { movies: moviesfromDB });
});

router.get('/movies/:id', async (req, res) => {
  const movieDetails = await Movie.findById(req.params.id);
  console.log('movieDetails');
  res.render('movie-details', { movieDetails });
});

module.exports = router;
