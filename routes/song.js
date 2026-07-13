const {express} = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const songs = await playlist.findAll();
    res.json(songs)
})

router.get("/:id",async (req, res) => {

} 