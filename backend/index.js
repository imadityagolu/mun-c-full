import express from "express";
import addproductRoutes from './routes/addproduct.routes.js';
import showProductRouter from './routes/showProduct.routes.js';
import mongoose from "mongoose";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 9874;

//mongodb://localhost:27017
mongoose.connect("mongodb+srv://adityasng420ak:aditya12345@cluster0.fgxyhi8.mongodb.net/munc")
.then(() => console.log(`Database connected Successfully`))
.catch ( error => console.log(`Error : `, error));

app.use(addproductRoutes);
app.use(showProductRouter);

app.listen(PORT, console.log(`server is up running at - http://localhost:${PORT}`));