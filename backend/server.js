const app = require('./app');
const cloudinary = require('cloudinary');

const port = process.env.PORT || 4000;

cloudinary.config({
    cloud_name: process.env.CLOUDDINARY_NAME,
    api_key: process.env.CLOUDDINARY_API_KEY,
    api_secret: process.env.CLOUDDINARY_SECRET,
})

app.listen(port, () => {
    console.log('server is listening on localhost:' + port);
})