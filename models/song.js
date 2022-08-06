const mongoose = require('mongoose');
const { model, Schema } = mongoose;

module.exports = model('Song', new Schema(
  {
    album: { type: Schema.Types.ObjectId, ref: 'Album', required: true },
    title: { type: String, required: true },
    genre: { type: String, required: true },
    length: { type: Number, required: true },
    track: { type: Number, required: true },
  }
));
