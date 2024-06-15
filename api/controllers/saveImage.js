const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Image = require('./models/Image'); // Adjust the path to your Image model

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = './images';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage }).single('image');

const saveImage = (req, res) => {
  upload(req, res, err => {
    if (err) {
      return res.status(500).send('Error uploading image: ' + err.message);
    }
    const imagePath = `/images/${req.file.filename}`;
    const newImage = new Image({ name: req.file.filename });
    newImage.save()
      .then(() => res.json({ message: 'Image uploaded and saved to MongoDB', path: imagePath }))
      .catch(err => res.status(500).send('Error saving image to MongoDB: ' + err.message));
  });
};

module.exports = saveImage;
