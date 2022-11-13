const bodyParser = require("body-parser");
const express = require("express"),
      app = express(),
      cors = require("cors"),
      morgan  = require("morgan"),     
      mongoose = require("mongoose");
// require('./app/routeHandler')(app)

//routes



// connecting to database 
main().catch(err=>{
  console.log(err)
})
async function main(){
  await mongoose.connect("mongodb://localhost:27017/cart")
}

// extras
app.use(cors())
app.use(bodyParser.json())
app.set("view engine", "ejs");
app.use('/files', express.static("files"));
//routes
app.get("/",  (req, res, next)=>{
  
  res.json({
    message: 'Arise MERN Developers'
  })
})
app.get("/home",  (req, res, next)=>{
  
  res.render("index")
})
  





const productRoutes = require("./app/Product/routes");
const cartRoutes = require('./app/cart/routes')
// module.exports = app => {
    app.use("/product", productRoutes);
    app.use("/cart", cartRoutes);
// }



// connecting to port 
const port = process.env.PORT || 3000;

app.listen(port,()=>{
  console.log(`application is running on ${port}`)
})