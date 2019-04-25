var mongoose = require("mongoose");

var Schema = mongoose.Schema;//Here we reference the Schema constructor 

//use the constructor to create an object for the db
var ArticleSchema = new Schema({

    title: {
        type: String,
        required: true//title is required and a string
    },

    link: {
        type: String,
        required: true
    },//link is required and is a string

    note: {//<<==this is what we reference to populate not the "Note" below 
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;