const express = require("express");
const router = express.Router();
const { Albums } = require('../models');

router.get("/", async(req, res)=>{
    const listOfAlbums = await Albums.findAll();
    res.json(listOfAlbums);
});

router.post("/", async(req, res)=>{
    const album = req.body;
    await Albums.create(album);
    res.json(album);
})


module.exports = router;