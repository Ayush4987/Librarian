import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/Book.route.js"
import userRoute from "./route/user.route.js"
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const mongoDBURL = process.env.mongoDBURL;
// connect to mongoDB
try{
  mongoose.connect(mongoDBURL,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
  });
  console.log("Connected to MongoDB");
}catch(error){
  console.log("Error: ",error);
}
//defining routes
app.use("/book",bookRoute)
app.use("/users",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})