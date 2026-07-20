const express = require("express");
const { db } = require("./models");
const playlistsRouter = require("./routes/playlists");
const songsRouter = require("./routes/songs");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/playlists", playlistsRouter);
app.use("/api/songs", songsRouter);

db.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});
