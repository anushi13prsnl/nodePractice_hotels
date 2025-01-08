const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, age:{
        type: Number
    }, work:{
        type: String,
        enum: ["chef", "waiter", "manager"],
        required: true
    }, mobile:{
        type: Number,
    }, email:{
        type: String,
        required: true,
        unique: true
    }, address:{
        type: String
    }, salary:{
        type: Number,
        required: true
    }
})

// Person var stores the model, n used to perform operations on the database like new Person(), Person.find(), Person.save() etc.
const Person = mongoose.model("Person", PersonSchema);
module.exports = Person;