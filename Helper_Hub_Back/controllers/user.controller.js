const storageService = require('../services/storage.service');
const { v4: uuid } = require("uuid");

async function handleUpdateUserDetails(params) {
    try {
        const { email, userName, phone, location, gender, address } = req.body;
        const uploadImage = await storageService.uploadFile(req.file.buffer, uuid());
        const updatedUser = await userSchema.findOneAndUpdate(
            { 
                email 
            },
            {
                userName, 
                phone, 
                location, 
                gender, 
                address, 
                profileImg: uploadImage.url,
            },
            {
                new: true, 
                upsert: true 
            }
        );
        res.json(updatedUser);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message });
    }
}

module.exports = { 
    handleUpdateUserDetails,
};