import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
dotenv.config()
connectDB()
const app = express();
app.use(express.json())
import router from './routes/taskRoutes.js'
app.use('/api',router)
app.get('/',(req,res)=>{
    res.send("server is running");
})

app.listen(5000,()=>{
    console.log("server running on port 5000")
})
