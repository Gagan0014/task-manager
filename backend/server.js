import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import errorHandler from './middleware/errorHandler.js'
import authRoutes from './routes/authRoutes.js'
import router from './routes/taskRoutes.js'

dotenv.config()
connectDB()

const app = express();

app.use(express.json())

app.use('/api/auth',authRoutes)
app.use('/api',router)

app.post('/debug', (req, res) => {
  console.log("BODY:", req.body)
  res.json(req.body)
})
app.get('/',(req,res)=>{
    res.send("server is running");
})
app.use(errorHandler);

app.listen(5000,()=>{
    console.log("server running on port 5000")
})
