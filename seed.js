const { db, Playlist, Song } = require("./models");

async function seed() {
  await db.sync({ force: true }); // wipe + rebuild — only ever in a seed script

  const playlist = await Playlist.create({
    name: "Playlist1",
    description: "Initial playlist",
  });

  await Song.create({ title: "Song 1", artist: "Artist 1", duration: 120, PlaylistId: playlist.id });
  await Song.create({ title: "Song 2", artist: "Artist 2", duration: 130, PlaylistId: playlist.id });
  await Song.create({ title: "Song 3", artist: "Artist 3", duration: 140, PlaylistId: playlist.id });

  console.log("Seeded!");
  await db.close();
}

seed();