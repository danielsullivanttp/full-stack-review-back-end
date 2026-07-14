const express = require("express");
const { db } = require("./models");
const playlistsRouter = require("./routes/playlists")
const songsRouter = require("./routes/songs")
const cors = require("cors");

const app = express(); // calling express to create the app
app.use(express.json()); // use the json middleware to read the JSON request bodies
app.use(cors());
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/playlists", playlistsRouter);
app.use("/api/songs", songsRouter)


db.sync().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    // open port 3000 and see if there are any HTTP requests
    console.log("Server running on http://localhost:3000"); // console logs when the server is running
  });
});
