const mongoose = require("mongoose");


const MenuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, price:{
        type: Number
    }, taste:{
        type: String,
        enum: ["spicy", "sweet", "sour", "bitter", "salty"]
    },is_drink:{
        type: Boolean,
        default: false
    },ingredients:{
        type:[String],
        default: []
    },num_sales:{
        type: Number,
        default: 0
    }
});

const MenuItem = mongoose.model("MenuItem", MenuItemSchema);
module.exports = MenuItem;