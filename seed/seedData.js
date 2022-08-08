const db = require('../db');
const models = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

const createArtist = function (artist) {
  return models.Artist.create(artist).then(doc => {
    console.log("\n>> Created Artist:\n", doc);
    return doc;
  });
};
const createAlbum = function (album) {
  return models.Album.create(album).then(doc => {
    console.log("\n>> Created Album:\n", doc);
    return doc;
  });
};
const createSong = function (song) {
  return models.Song.create(song).then(doc => {
    console.log("\n>> Created Song:\n", doc);
    return doc;
  });
};

const main = async () => {
  try {
    const artist = await createArtist({ name: 'Gorillaz' });
    const album = await createAlbum([
      {
        artist: artist._id,
        genre: "Alternative",
        release: 'May 11, 2005',
        title: 'Demon_Days',
        tracks: 15,
      },
      {
        artist: artist._id,
        genre: "Alternative",
        release: 'March 3, 2010',
        title: 'Plastic_Beach',
        tracks: 16,
      },
      {
        artist: artist._id,
        genre: "Alternative",
        release: 'December 25, 2010',
        title: 'The_Fall',
        tracks: 15,
      },
    ]);
    const songs = await createSong([
      {
        album: album[0]._id,
        title: 'Intro',
        genre: 'Alternative',
        length: 63,
        track: 1,
      },
      {
        album: album[0]._id,
        title: 'Last Living Souls',
        genre: 'Alternative',
        length: 190,
        track: 2,
      },
      {
        album: album[0]._id,
        title: 'Kids With Guns',
        genre: 'Alternative',
        length: 225,
        track: 3,
      },
      {
        album: album[0]._id,
        title: 'O Green World',
        genre: 'Alternative',
        length: 271,
        track: 4,
      },
      {
        album: album[0]._id,
        title: 'Dirty Harry',
        genre: 'Alternative',
        length: 223,
        track: 5,
      },
      {
        album: album[0]._id,
        title: 'Feel Good Inc.',
        genre: 'Alternative',
        length: 221,
        track: 6,
      },
      {
        album: album[0]._id,
        title: 'El Mañana',
        genre: 'Alternative',
        length: 230,
        track: 7,
      },
      {
        album: album[0]._id,
        title: 'Every Planet We Reach Is Dead',
        genre: 'Alternative',
        length: 293,
        track: 8,
      },
      {
        album: album[0]._id,
        title: 'November Has Come',
        genre: 'Alternative',
        length: 161,
        track: 9,
      },
      {
        album: album[0]._id,
        title: 'All Alone',
        genre: 'Alternative',
        length: 210,
        track: 10,
      },
      {
        album: album[0]._id,
        title: 'White Light',
        genre: 'Alternative',
        length: 128,
        track: 11,
      },
      {
        album: album[0]._id,
        title: 'Dare',
        genre: 'Alternative',
        length: 244,
        track: 12,
      },
      {
        album: album[0]._id,
        title: "Fire Coming Out of the Monkey's Head",
        genre: 'Alternative',
        length: 196,
        track: 13,
      },
      {
        album: album[0]._id,
        title: "Don't Get Lost In Heaven",
        genre: 'Alternative',
        length: 120,
        track: 14,
      },
      {
        album: album[0]._id,
        title: 'Demon Days',
        genre: 'Alternative',
        length: 268,
        track: 15,
      },
      {
        album: album[1]._id,
        title: 'Orchestral Intro',
        genre: 'Alternative',
        length: 69,
        track: 1,
      },
      {
        album: album[1]._id,
        title: 'Welcome to the World of the Plastic Beach',
        genre: 'Alternative',
        length: 215,
        track: 2,
      },
      {
        album: album[1]._id,
        title: 'White Flag',
        genre: 'Alternative',
        length: 223,
        track: 3,
      },
      {
        album: album[1]._id,
        title: 'Rhinestone Eyes',
        genre: 'Alternative',
        length: 200,
        track: 4,
      },
      {
        album: album[1]._id,
        title: 'Stylo',
        genre: 'Alternative',
        length: 270,
        track: 5,
      },
      {
        album: album[1]._id,
        title: 'Superfast Jellyfish',
        genre: 'Alternative',
        length: 174,
        track: 6,
      },
      {
        album: album[1]._id,
        title: 'Empire Ants',
        genre: 'Alternative',
        length: 283,
        track: 7,
      },
      {
        album: album[1]._id,
        title: 'Glitter Freeze',
        genre: 'Alternative',
        length: 243,
        track: 8,
      },
      {
        album: album[1]._id,
        title: 'Some Kind of Nature',
        genre: 'Alternative',
        length: 179,
        track: 9,
      },
      {
        album: album[1]._id,
        title: 'On Melancholy Hill',
        genre: 'Alternative',
        length: 233,
        track: 10,
      },
      {
        album: album[1]._id,
        title: 'Broken',
        genre: 'Alternative',
        length: 197,
        track: 11,
      },
      {
        album: album[1]._id,
        title: 'Sweepstakes',
        genre: 'Alternative',
        length: 320,
        track: 12,
      },
      {
        album: album[1]._id,
        title: 'Plastic Beach',
        genre: 'Alternative',
        length: 227,
        track: 13,
      },
      {
        album: album[1]._id,
        title: 'To Binge',
        genre: 'Alternative',
        length: 235,
        track: 14,
      },
      {
        album: album[1]._id,
        title: 'Cloud of Unknowing',
        genre: 'Alternative',
        length: 186,
        track: 15,
      },
      {
        album: album[1]._id,
        title: 'Pirate Jet',
        genre: 'Alternative',
        length: 152,
        track: 16,
      },
      {
        album: album[2]._id,
        title: 'Phoner to Arizona',
        genre: 'Alternative',
        length: 254,
        track: 1,
      },
      {
        album: album[2]._id,
        title: 'Revolving Doors',
        genre: 'Alternative',
        length: 206,
        track: 2,
      },
      {
        album: album[2]._id,
        title: 'Hillbilly Man',
        genre: 'Alternative',
        length: 230,
        track: 3,
      },
      {
        album: album[2]._id,
        title: 'Detroit',
        genre: 'Alternative',
        length: 123,
        track: 4,
      },
      {
        album: album[2]._id,
        title: 'Shy-Town',
        genre: 'Alternative',
        length: 174,
        track: 5,
      },
      {
        album: album[2]._id,
        title: 'Little Pink Plastic Bags',
        genre: 'Alternative',
        length: 189,
        track: 6,
      },
      {
        album: album[2]._id,
        title: 'The Joplin Spider',
        genre: 'Alternative',
        length: 202,
        track: 7,
      },
      {
        album: album[2]._id,
        title: 'The Parish of Space Dust',
        genre: 'Alternative',
        length: 145,
        track: 8,
      },
      {
        album: album[2]._id,
        title: 'The Snake in Dallas',
        genre: 'Alternative',
        length: 131,
        track: 9,
      },
      {
        album: album[2]._id,
        title: 'Amarillo',
        genre: 'Alternative',
        length: 204,
        track: 10,
      },
      {
        album: album[2]._id,
        title: 'The Speak It Mountains',
        genre: 'Alternative',
        length: 134,
        track: 11,
      },
      {
        album: album[2]._id,
        title: 'Aspen Forest',
        genre: 'Alternative',
        length: 170,
        track: 12,
      },
      {
        album: album[2]._id,
        title: 'Bobby in Phoenix',
        genre: 'Alternative',
        length: 196,
        track: 13,
      },
      {
        album: album[2]._id,
        title: "California and the Slipping of the Sun",
        genre: 'Alternative',
        length: 204,
        track: 14,
      },
      {
        album: album[2]._id,
        title: 'Seatlle Yodel',
        genre: 'Alternative',
        length: 38,
        track: 15,
      },
    ]);

    console.log('Seeded Data');
  } catch (error) {
    console.log(error.message);
  }
};

const run = async () => {
  await main();
  db.close();
};

run();
