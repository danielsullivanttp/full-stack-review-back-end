const express = require("express");
const { Playlist, Song } = require("../models");

const router = express.Router();

// GET / → all playlists
router.get("/", async (req, res) => {
  const playlists = await Playlist.findAll({ include: Song });
  res.status(200).json(playlists);
});

// GET /:id → one playlist by id (use findByPk) include songs
router.get("/:id", async (req, res) => {
  const playlist = await Playlist.findByPk(Number(req.params.id), {
    include: Song,
  });
  if (!playlist)
    return res.status(404).json({ error: "Playlist Not Found!!!" });
  res.status(200).json(playlist);
});

// POST / → create a playlist from req.body
router.post("/", async (req, res) => {
  const newPlaylist = await Playlist.Create(req.body);
  res.status(201).json(newPlaylist);
});

// PATCH /:id → update a playlist
router.patch("/:id", async (req, res) => {
  const playlist = await Playlist.findByPk(Number(req.params.id));
  if (!playlist) return res.status(404).json({ error: "Playlist not found" });
  await playlist.update(req.body);
  res.status(200).json(playlist);
});

// DELETE a task

// DELETE /:id → delete a playlist

router.delete("/:id", async (req, res) => {
  const playlist = await Playlist.findByPk(Number(req.params.id));
  if (!playlist) return res.status(404).json({ error: "Playlist not found" });
  await playlist.destroy();
  res.sendStatus(204);
});

module.exports = router;
