const mongoose = require("mongoose");



const productSchema = new mongoose.Scheama({
  name:{
    type:String,
    required:[true, "please include the product name"],
  },
  price:{
    type: String,
    required:[true, "please include product price"]
  },
  image:{
    type: String,
    required:[true,"please include product image"]
  },
});

const Product = mongoose.model("Produc", productSchema);
module.exports = Product;