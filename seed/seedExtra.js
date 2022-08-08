const db = require('../db');
const models = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

const createArtist = function (artist) {
  return models.Artist.create(artist).then(doc => {
    console.log("\n>> Created Artist:\n", doc);
    return doc;
  });
};

const main = async () => {
  try {
    // todo - remove delete statements once done
    await models.Artist.deleteMany({});
    const artist = await createArtist({ name: 'Septicflesh' });

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
