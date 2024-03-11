const mongoose = require('mongoose')

const { Schema } = mongoose;
const ItemSchema = new Schema({
    CategoryName: { type: String, required: true },
    name: { type: String, required: true },
    img: { type: String, required: true },
    options: {
        type: [{
            size: String,
            price: Number,
        }],
        required: true,
    },
    description: { type: String, required: true },
});

module.exports = mongoose.model('item', ItemSchema)