import express from 'express';
import cors from 'cors';
import 'dotenv/config'

// app config

const app = express();
const PORT = process.env.PORT || 4000;



// middlewares
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send("server is running")
})

app.listen(PORT, () => {
    console.log(`server is runnning on port ${PORT}`)
})