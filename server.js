import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from 'mongoose';
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdev'
mongoose.connect('mongodb+srv://anika:password123!@tuits.tikel.mongodb.net/Tuits?retryWrites=true&w=majority');
// 'mongodb+srv://anika:password123!@tuits.tikel.mongodb.net/Tuits?retryWrites=true&w=majority'
const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);

app.listen(process.env.PORT || 4000);