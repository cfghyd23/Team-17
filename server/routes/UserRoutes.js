import express from "express";
import {userSignUp, userLogin,addToCart,getCart, checkoutCart, getOrders, delFromCart, changeQuantityInCart, userCheck} from "../controllers/UserController.js";
const UserRouter  = express.Router();


//uploading image 
import {v2 as Cloudinary} from "cloudinary"
import  { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
//configure cloudinary
Cloudinary.config({
  cloud_name: 'dwk5flgjs',
  api_key: '',
  api_secret: '',
  secure: true,
});
const cloudinaryStorage = new CloudinaryStorage({
  cloudinary: Cloudinary,
  params: async (req, file) => {
    return {
      folder: "profiles",
      public_id: file.originalname + "-" + Date.now(),
    };
  },
});

var upload = multer({ storage: cloudinaryStorage });


//Routes

UserRouter.post("/signup", upload.single("photo"),userSignUp);
/*
   name,email,password,contactNo
*/
UserRouter.post("/login",userLogin)
/*
    email,
    password
*/
UserRouter.post("/addtocart",addToCart)
/*
    userId:,
    productId,
*/
UserRouter.delete("/deletefromcart",delFromCart)
/*
    userId:,
    productId:,
*/
UserRouter.post("/changecart",changeQuantityInCart) 
/*
     userId,
     productId,
     quantity 
*/
UserRouter.post("/getcart",getCart)
/*
    userId:
*/
UserRouter.post("/checkoutcart",checkoutCart)
/*
    userId :
    address:
*/
UserRouter.post("/getorders",getOrders)
/*
   userId:
*/

export default UserRouter;