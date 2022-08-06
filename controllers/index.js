const { Artist, Album, Song } = require('../models');

const hiddenProps = { "__v": 0, createdAt: 0, updatedAt: 0 };

// Artist Controls
const getArtist = async (request, response) => {
  try {
    const { name } = request.params;
    const artist = await Artist.find({ name }, hiddenProps);

    if (artist) {
      return response.status(200).json({ artist });
    }
    else {
      return response.status(404).send('Artist not found');
    }

  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
const getArtists = async (request, response) => {
  try {
    const { name } = request.params;
    const artists = await Artist.find({}, hiddenProps);

    if (artists) {
      return response.status(200).json({ artists });
    }
    else {
      return response.status(404).send('Artists not found');
    }

  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

// Album Controls
const getAlbum = async (request, response) => {
  try {
    const { title } = request.params;
    const album = await Album.findOne({ title }, hiddenProps);
    await album.populate('artist');

    if (album) {
      return response.status(200).json({ album });
    }
    else {
      return response.status(404).send('Album not found');
    }

  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
const getAlbums = async (request, response) => {
  try {
    const { name } = request.params;
    const albums = await Album.find({}, hiddenProps);
    await Promise.all(albums.map(album => album.populate('artist')));

    if (albums) {
      return response.status(200).json({ albums });
    }
    else {
      return response.status(404).send('Albums not found');
    }

  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

// Song Controls
const getSong = async (request, response) => {
  try {
    const { title } = request.params;
    const song = await Song.findOne({ title }, hiddenProps);
    await song.populate('album');
    await song.album.populate('artist');

    if (song) {
      return response.status(200).json({ song });
    }
    else {
      return response.status(404).send('Song not found');
    }

  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
const getSongs = async (request, response) => {
  try {
    const { title } = request.params;
    const songs = await Song.find({}, hiddenProps);
    const sAlbum = await Promise.all(songs.map(song => song.populate('album')));
    await Promise.all(sAlbum.map(song => song.album.populate('artist')));

    if (sAlbum) {
      return response.status(200).json({ sAlbum });
    }
    else {
      return response.status(404).send('Song not found');
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

module.exports = {
  getArtist,
  getArtists,
  getAlbum,
  getAlbums,
  getSong,
  getSongs,
};
