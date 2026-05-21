import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/db.js';
import authRouter from './routes/authRoutes.js';
import rankRouter from './routes/rankRoutes.js';
import analysisRouter from './routes/analysisRoutes.js';
import { startRankTrackingCron } from './cron/rankTrackingCron.js';

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

app.use("/api/auth", authRouter);
app.use("/api/rank", rankRouter);
app.use("/api/analysis", analysisRouter);

// start cron job

startRankTrackingCron()

app.listen(PORT, () => {
    console.log(`server is runnning on port ${PORT}`)
})