const { hashPassword, comparePasswords, generateToken, verifyToken } = require('./auth');cd

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());

app.post('/upload', upload.single('file'), (req, res) => {
  // Logic to handle the file upload goes here
const file = req.file;
console.log('File uploaded:', file);
  // Return the generated file URL as the response
res.json({ url: `http://your-backend-url/uploads/${file.filename}` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
