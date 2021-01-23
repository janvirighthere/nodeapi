const mongoose = require('mongoose');
const conn = mongoose.connection;
const Schema = mongoose.Schema;

const productSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
});

module.exports = mongoose.model('Product', productSchema);