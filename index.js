require('dotenv').config()
const express=require("express")
let cors=require('cors')
const db=require("./connection/db")
const userRoutes=require('./routes/user_route')
const cookieParser=require('cookie-parser')
const categoryRoutes = require('./routes/category_route');
const productRoutes = require('./routes/product_route');
const paymentRoutes=require("./routes/payment_route")
const app=express()
const PORT=process.env.listen || 8080

db
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

app.use('/user', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/product', productRoutes);
app.use('/payment', paymentRoutes);

app.listen(PORT,()=>{
    console.log(`Server Listening at ${PORT}`);
})