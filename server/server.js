import express  from "express";
import mongoose from "mongoose";
import UserRouter from './routes/UserRoutes.js';
import cors from "cors";
import dotenv from 'dotenv';

//for deployment from client/build folder
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const App = express();
App.use(cors());
App.use(express.json());
dotenv.config();

mongoose.connect(process.env.DB_CONNECTION_URL)
 .then(()=>console.log("Connected to database"))
 .catch((err) => console.log(err))


App.use("/api/user",UserRouter);

// ------------deployment from client/build------------
if(process.env.NODE_ENV === 'production')
{
  App.use(express.static(path.join(__dirname,'../client/build')))
  //to handle page refresh
  App.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'../client/build/index.html'))
  })
}


//handling invalid paths
App.use((request, response, next) => {
    response.status(400).json({ message: `path ${request.url} is invalid` });
  });
  
  //error handling middleware
App.use((error, request, response, next) => {
    response.status(400).json({ message: "Error occurred", reason: `${error.message}` });
  });


// ------------deployment--------------

const PORT = process.env.PORT;
 App.listen(PORT||5000,()=>console.log(`server listening on port ${PORT}`));
   
  