
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'; 

import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js';
dotenv.config()

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("mongodb server running...")
})
.catch((err) => {
    console.log(err)
});
const app = express();

app.use(express.json()); //allow json file to work on backend

app.listen(3000, () => {
    console.log("server is running on port 3000");
});



app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);