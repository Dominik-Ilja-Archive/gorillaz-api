const express = require('express');
const { getArtist, getArtists, getAlbum, getAlbums, getSong, getSongs } = require('../controllers');
const router = express.Router(); // { caseSensitive: true, strict: true }

// api root
router.get('/', (request, response) => response.send('This is the root'));

// artists
router.get('/artists', getArtists);
router.get('/artists/:name', getArtist);

// albums
router.get('/albums', getAlbums);
router.get('/albums/:title', getAlbum);

// songs
router.get('/songs', getSongs);
router.get('/songs/:title', getSong);

module.exports = router;
