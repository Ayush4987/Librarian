import book from "../Models/Book.model.js";

export const getBook =  async(req,res) =>{
    try {
        const Book = await book.find()
        res.status(200).json(Book); 
    } catch (error) {
        console.log("Error : ",error);
        res.status(500).json(error);
    }
};