import User from "../models/User.js"
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";
import twilio from "twilio";
import emailjs from '@emailjs/browser';
//twilio sms 
const accountSid = "ACcfc7b640a5a2e10a5314a0dc94fcd185";
const authToken = "";
const client = twilio(accountSid, authToken);
//email
let serviceID = "service_2x3bv6p";
let publicID = ""
let templateID = "template_hf2t5yu"
let publicKey = ''


export const ImageUpload = expressAsyncHandler(async (req, res, next) => {

})

export const userCheck = expressAsyncHandler(async (req, res, next) => {
  console.log("called")
  console.log(JSON.parse(req.body.userObj))
  // const {email} = JSON.parse(req.body.userObj);
  console.log("done")
  console.log(email)
  let existingUser  = await User.findOne({email});
  if(existingUser)
  {
     return res.status(203).json({message : "User Already Exists!"});
  }
  next()

})


export const userSignUp = expressAsyncHandler(async (req, res, next) => {
  const {name,email,password,contactNo} = JSON.parse(req.body.userObj);
  
  let existingUser  = await User.findOne({email});
  if(existingUser)
  {
     return res.status(203).json({message : "User Already Exists!"});
  }

  // let otp = Math.floor(100000 + Math.random() * 900000)
  // verification email
  // var templateParams = {
  //   to_name: name,
  //   to_email: email,
  //   from_name :"CFG APP",
  //   message:`Hello ${name}! 
  //   Your OTP to verify your mail is : ${otp}`
  // };
  // emailjs.send(serviceID, templateID, templateParams,publicKey)
  //   .then(function(response) {
  //      console.log('SUCCESS! Email Sent', response.status, response.text);
  //   }, function(error) {
  //      console.log('FAILED...', error);
  //   });

  //   return res.status(201).json({message:"Email sent" , otp});

  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
      name,
      email,
      password:hashedPassword,
      contactNo,
      photoURL:req.file.path

  });
  await user.save();
  return res.status(201).json({message:"Signup Successful" , payload:user});
})

export const VerifySignupOtp=expressAsyncHandler(async (req, res, next) => {
    
  const {name,email,password,contactNo} = JSON.parse(req.body.userObj);
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
      name,
      email,
      password:hashedPassword,
      contactNo,
      photoURL:req.file.path

  });
  await user.save();
  return res.status(201).json({message:"Signup Successful" , payload:user});
})


export const userLogin = expressAsyncHandler(async (req, res, next) => {

  const { email, password } = req.body;

  let existingUser = await User.findOne({ email });

  if (!existingUser) {
    return res.status(404).json({ message: "User Not Found!" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

  if (!isPasswordCorrect) {
    return res.status(203).json({ message: "Incorrect Password!" });

  }
  let otp = Math.floor(100000 + Math.random() * 900000)
  client.messages
    .create({
      body: `Hey ${existingUser.name}! Your OTP for login is ${otp}`,
      from: '+12707517348',
      to: '+919000976555'
    })
    .then(message => console.log(message.sid + "message sent"));
  let user = new Object()
  user.userObj = existingUser
  user.otp = otp
  return res.status(201).json({ message: "Login Successful", user: user });

})

export const addToCart = expressAsyncHandler(async (req, res, next) => {

  const { userId, productId } = req.body;

  // Find the user by ID
  const user = await User.findById(userId);
  

  // Check if the user exists
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Check if the product is already in the user's cart
  const existingCartItem = user.cart.find(
    (item) => item.productId.toString() === productId
  );

  let prod = await Product.findOne({ _id: productId })
  if (!prod) {
    res.status(404).json({ message: "Product not available" })
  }
  const sellerId = prod.sellerId
  // If the product is already in the cart, increment the quantity
  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    // Otherwise, add the product to the cart with quantity 1
    let obj = {
      productId: productId,
      sellerId: sellerId
    }
    user.cart.push(obj);
  }

  // Save the user with the updated cart
  try {
    await user.save();
    res.status(200).json({ message: "Added to Cart", payload: user.cart });
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//delete item from cart 
export const delFromCart = expressAsyncHandler(async (req, res) => {
  const { userId, productId } = req.body;


  // Find the user by the provided userId
  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Find the index of the cart item to be removed based on the productId
  const cartItemIndex = user.cart.findIndex(item => item.productId.toString() === productId);

  if (cartItemIndex === -1) {
    return res.status(404).json({ message: 'Product not found in cart' });
  }

  // Remove the cart item from the user's cart array
  user.cart.splice(cartItemIndex, 1);

  // Save the updated user document
  try {
    await user.save();
    return res.status(200).json({ message: 'Item removed from cart successfully' });
  }
  catch (err) {
    return res.status(500).json({ message: 'removing failed', reason: err.message });
  }
})

//changing quantity of a product in the cart with counter
//delete item from cart if quantity=0 
export const changeQuantityInCart = expressAsyncHandler(async (req, res) => {
  const { userId, productId, quantity } = req.body;

  // Find the user by the provided userId
  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Find the index of the cart item to be updated based on the productId
  const cartItemIndex = user.cart.findIndex(item => item.productId.toString() === productId);

  if (cartItemIndex === -1) {
    return res.status(404).json({ message: 'Product not found in cart' });
  }

  if (quantity === 0) {
    user.cart.splice(cartItemIndex, 1);
    await user.save()
    res.status(200).json({ message: "Cart Item removed" })
  }

  //update quantity with cartItemIndex
  let cartItem = user.cart.at(cartItemIndex)
  //updating the quantity
  let prevQuant = cartItem.quantity
  cartItem.quantity = quantity
  user.cart.splice(cartItemIndex, 1, cartItem)
  // Save the updated user document
  try {
    await user.save();
    return res.status(200).json({ message: `Quantity changed from ${prevQuant} to ${quantity}` });
  }
  catch (err) {
    return res.status(500).json({ message: 'Error in updating quantity', reason: err.message });
  }
})

//get cart products of user by user id
export const getCart = expressAsyncHandler(async (req, res, next) => {
  let userId = req.body.userId
  let user = await User.findOne({ _id: userId })
  if (!user)
    return res.status(203).json({ message: "Invalid user" })
  let cartProductObjs = user.cart
  let cartItems = []
  for (let x of cartProductObjs) {
    let prod = await Product.findOne({ _id: x.productId })
    let cartItem = {}
    cartItem.product = prod;
    cartItem.quantity = x.quantity;
    cartItems.push(cartItem)
  }
  return res.status(201).json({ message: "Cart Products", payload: cartItems })
})

//checking out the cart and placing the order
export const checkoutCart = expressAsyncHandler(async (req, res, next) => {

  let { userId, address } = req.body;

  let user = await User.findOne({ _id: userId })
  if (!user)
    return res.status(203).json({ message: "Unable to checkout! Invalid user" })

  let cartProductObjs = user.cart
  var totalCost = 0, eachProdCost;

  //calculating total cost of cart checkout
  const orderCreationPromises = cartProductObjs.map(async (x) => {
    let product = await Product.findOne({ _id: x.productId });
    let quantity = x.quantity;
    eachProdCost = quantity * product.price;

    totalCost = totalCost + eachProdCost;

    // Add each product as a different order to the orders collection
    const newOrder = new Order({
      productId: x.productId,
      buyerId: userId,
      sellerId: x.sellerId,
      quantity: quantity,
      cost: eachProdCost,
      buyerAddress: address,
    });

    await newOrder.save();
  });
  
  await Promise.all(orderCreationPromises);
  user.cart.splice(0, user.cart.length)
  await user.save()
  // Wait for all the order creation promises to complete


  return res.status(201).json({ message: "Order Placed", totalCost })


})


export const getOrders = expressAsyncHandler(async (req, res, next) => {
  let userId = req.body.userId;

  let user = await User.find({ _id: userId })
  if (!user) {
    res.status(404).json({ message: "User not found" })
  }
  let orderObjs = {
    pendingOrders: [],
    completedOrders: [],
    cancelledOrders: [],
  }
  let orders = await Order.find({ buyerId: userId })

  for (let ordObj of orders) {
    if (ordObj.status === 'pending') {
      orderObjs.pendingOrders.push(ordObj)
    }
    else if (ordObj.status === 'delivered') {
      orderObjs.completedOrders.push(ordObj)
    }
    else if (ordObj.status === 'cancelled') {
      orderObjs.cancelledOrders.push(ordObj)
    }

  }

  res.status(200).json({ message: "Orders of user", payload: orderObjs })

})

