// Songs
const express = require("express");
const router = express.Router();
const { Song } = require('../models');

router.get("/:albumId", async(req, res)=>{
    const albumId = req.params.albumId;
    const song = await Song.findAll({where:{AlbumId:albumId}});
    res.json(song);
});

router.post("/", async (req, res) =>{
    const song = req.body;
    await Song.create(song);
    res.json(song);
})

module.exports = router;
