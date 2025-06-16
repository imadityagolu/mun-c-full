import express from "express";
import addproductRoutes from './routes/addproduct.routes.js';
import mongoose from "mongoose";

const app = express();

app.use(express.json());

const PORT = 9874;

//mongodb://localhost:27017
mongoose.connect("mongodb+srv://adityanetario:863ZKSxWvS69udGM@cluster0.zsyxdso.mongodb.net/munc")
.then(() => console.log(`Database connected Successfully`))
.catch ( error => console.log(`Error : `, error));


app.use(addproductRoutes);

app.listen(PORT, console.log(`server is up running at - http://localhost:${PORT}`));