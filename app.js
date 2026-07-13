const express = require("express");
const { db } = require("./models");
const playlistsRouter = require("./routes/playlists")

const app = express(); // calling express to create the app
app.use(express.json()); // use the json middleware to read the JSON request bodies

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/playlists", playlistsRouter);

db.sync().then(() => {
  app.listen(3000, () => {
    // open port 3000 and see if there are any HTTP requests
    console.log("Server running on http://localhost:3000"); // console logs when the server is running
  });
});
