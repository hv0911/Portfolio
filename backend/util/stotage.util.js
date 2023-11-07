const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDDINARY_NAME,
    api_key: process.env.CLOUDDINARY_API_KEY,
    api_secret: process.env.CLOUDDINARY_SECRET,
})

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'projects',
        allowedFormats: ['jpeg', 'png', 'jpg'],
    }
});

module.exports = {
    storage
};