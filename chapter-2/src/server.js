import express from "express";
import path ,{dirname} from "path";
import { fileURLToPath } from 'url';
import authRoutes from "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";
const app = express();
const PORT = process.env.PORT ||7118;
// get the file path from the url of the current module
const __filename = fileURLToPath(import.meta.url);
// get the directory name from the file path
const __dirname = dirname(__filename);
//middleware 
app.use(express.json());
//serves the html file from the /public directory
app.use(express.static(path.join(__dirname,'../public')));
console.log(path.join(__dirname,'../public'));
console.log(__filename);
//serving up the html file from the /public driectory  
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','index.html'));
});
//routes
app.use(`/auth`, authRoutes);
app.use(`/todos`, todoRoutes);
app.listen(PORT, () => console.log(`Server is running on the port = ${PORT}`));
