var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//well create another object for the db

var NoteSchema = new Schema({

    title: String,

    body: String
});

var Note = mongoose.model("Note", NoteSchema); //create the model with the given object using the mongoose method 

module.exports = Note;