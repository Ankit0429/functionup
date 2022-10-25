const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName:String,
    authorName:String,
    category:{
        type:String,
        enum: ["adventure","classics","crime","Fairy tales","databse"]
    },
    year:{
        type:Number, required:true

    },
},
    { timestamps: true });


    module.exports= mongoose.model('Book', bookSchema)

