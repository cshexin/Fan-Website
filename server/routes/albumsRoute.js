const express = require("express");
const router = express.Router();
const { Album } = require('../models');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

// 确保目标目录存在，如果不存在则创建
const uploadDir = path.join(__dirname, '../../client/src/covers/album');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// 配置 Multer 存储
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); // 将文件保存到指定路径
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // 使用时间戳作为唯一文件名
    }
});

const upload = multer({ storage });

// 获取所有专辑
router.get("/", async (req, res) => {
    try {
        const listOfAlbums = await Album.findAll();
        res.json(listOfAlbums);
    } catch (error) {
        res.status(500).send({ error: "Failed to fetch albums." });
    }
});

// 根据 ID 获取专辑
router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const albuminfo = await Album.findByPk(id);
        res.json(albuminfo);
    } catch (error) {
        res.status(500).send({ error: "Failed to fetch album by ID." });
    }
});

// 上传专辑数据和封面图片
router.post("/", upload.single('image'), async (req, res) => {
    try {
        // 获取文件名和专辑数据
        const imageName = req.file ? req.file.filename : null;
        const albumDetails = {
            title: req.body.title,
            released_date: req.body.released_date,
            cover: imageName, // 保存图片文件名
        };

        // 创建专辑记录
        const newAlbum = await Album.create(albumDetails);
        res.status(201).send(newAlbum);
    } catch (error) {
        console.error("Error creating album:", error);
        res.status(500).send({ error: "Failed to create album." });
    }
});

module.exports = router;
