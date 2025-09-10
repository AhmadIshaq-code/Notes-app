import express from 'express'
import { connectDb } from './config/db.js';
import dotenv from 'dotenv'
import router from './routes/authRoute.js';
import noteRouter from './routes/notesRoute.js';
import path from "path";
import { fileURLToPath } from "url";


dotenv.config()

const app = express()
const port = process.env.PORT || 3000;

// Required for _dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json()) 
const dbUrl = process.env.MONGO_URL;

// Serve frontend (public folder)
app.use(express.static(path.join(__dirname, "public")));

//API routes
app.use('/api/auth',router)
app.use('/api/notes',noteRouter)


 app.get('/',(req,res)=>{
  res.send("Server is running")
 })


 // Start server only after DB connects
const startApp = async () => {
  await connectDb(dbUrl);
  app.listen(port, () => {
    console.log("Server is running on port 3000")
 });
};


startApp()
