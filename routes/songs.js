const express = require("express");
const { Song } = require("../models");
const router = express.Router();

// add song to specific playlist
router.post("/", async (req, res) => {
  const song = await Song.create(req.body);
  res.status(201).json(song);
});

// delete a song
router.delete("/:id", async (req, res) => {
  const song = await Song.findByPk(req.params.id);
  if (!song) return res.status(404).json({ error: "Song not found" });
  await song.destroy();
  res.sendStatus(204);
});

module.exports = router;
