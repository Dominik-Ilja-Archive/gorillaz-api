const mongoose = require('mongoose');

module.exports = mongoose.model('Album', new mongoose.Schema(
  {
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artist'
    },
    genre: { type: String, required: true },
    release: { type: String, required: true },
    title: { type: String, required: true },
    tracks: { type: Number, required: true },
    // songs: [{ type: Song, required: true }]
  }
));
