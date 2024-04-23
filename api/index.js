
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'; 

dotenv.config()

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("mongodb server")
})
.catch((err) => {
    console.log(err)
});
const app = express();

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
