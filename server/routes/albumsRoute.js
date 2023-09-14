// album
const express = require("express");
const router = express.Router();
const { Album } = require('../models');

const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '/home/hexinhu/Miyuki-Fan-Website/client/src/covers/album'))
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

router.get("/", async(req, res)=>{
    const listOfAlbums = await Album.findAll();
    res.json(listOfAlbums);
});

router.get('/byId/:id', async(req, res)=>{
    const id = req.params.id;
    const albuminfo = await Album.findByPk(id);
    res.json(albuminfo);
})

router.post("/",  upload.single('image'), async(req, res)=>{
    const imageName = req.file.filename

    const album = req.body;
    await Album.create(album);

    const albumDetails = {
        ...req.body,
        cover: imageName  // Add the image name to the album details
    };

    await Album.create(albumDetails);

    res.send({ imageName });
    console.log(imageName)

})


module.exports = router;
