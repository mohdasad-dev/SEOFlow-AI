import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/db.js';
import authRouter from './routes/authRoutes.js';

// app config
connectDB()
const app = express();
const PORT = process.env.PORT || 4000;



// middlewares
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send("server is running")
})

app.use("/api/auth", authRouter)

app.listen(PORT, () => {
    console.log(`server is runnning on port ${PORT}`)
})