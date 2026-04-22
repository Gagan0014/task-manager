import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import errorHandler from './middleware/errorHandler.js'
import authRoutes from './routes/authRoutes.js'
import router from './routes/taskRoutes.js'

dotenv.config()
connectDB()

const app = express();
app.use(cors());
app.use(express.json())

app.use('/api/auth',authRoutes)
app.use('/api',router)

app.get('/',(req,res)=>{
    res.send("server is running");
})
app.use(errorHandler);

app.listen(5000,()=>{
    console.log("server running on port 5000")
})
