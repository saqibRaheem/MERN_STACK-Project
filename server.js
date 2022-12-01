require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieparser = require('cookie-parser')


const app = express()
app.use(express.json())
app.use(cookieparser())
app.use(cors())
app.use(fileUpload({
    useTempFiles:true
}))

//Routes
app.use('/user', require('./routes/userRouter.js'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/productRouter'))

// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI,
//     ,{
//     useCreateIndex: true,
//     useFindAndModify:false,
//     useNewUrlParser: true,
//     useUnifiedTopology:true,
// },
err=>{
    if(err) throw err;
    console.log('connected to MongoDB');
})

app.get('/', (req,res)=>{
    res.json({msg:"create success fully server"})
})


const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log('server is running on port' , PORT);
})