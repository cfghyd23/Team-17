import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    
    email:{
        type: String,
        required: true,
        unique : true
    },
    password:{
        type:String,
        require : true,
        minLength:8
    },
    contactNo:{
        type:Number,
        require : true,
        
    },
    photoURL:{
      type:String,
      require : true,
  },
    //cart obj has product id and quantity
    cart: [{
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
        sellerId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Seller',
          required:true,
        }
      }]
    

});

export default mongoose.model("User",userSchema);