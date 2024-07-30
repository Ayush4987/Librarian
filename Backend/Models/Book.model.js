import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    mane : String,
    price: Number,
    Category : String,
    image : String,
    title : String,
})

const book = mongoose.model("Book",bookSchema);

export default book