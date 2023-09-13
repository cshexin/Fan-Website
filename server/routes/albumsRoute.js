// album
const express = require("express");
const router = express.Router();
const { Album } = require('../models');

router.get("/", async(req, res)=>{
    const listOfAlbums = await Album.findAll();
    res.json(listOfAlbums);
});

router.get('/byId/:id', async(req, res)=>{
    const id = req.params.id;
    const albuminfo = await Album.findByPk(id);
    res.json(albuminfo);
})

router.post("/", async(req, res)=>{
    const album = req.body;
    await Album.create(album);
    res.json(album);
})


module.exports = router;
