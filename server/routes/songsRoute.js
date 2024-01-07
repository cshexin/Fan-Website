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

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    try {
        const song = await Song.findByPk(id);
        if (song) {
            await song.update(updatedData);
            res.send(song);
        } else {
            res.status(404).send({ message: 'Song not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/:id", async (req, res) => {
    const songId = req.params.id;
  
    try {
      const deletedSong = await Song.destroy({
        where: { id: songId },
      });
  
      if (deletedSong) {
        res.status(200).json({ message: "Song deleted successfully" });
      } else {
        res.status(404).json({ message: "Song not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

module.exports = router;
