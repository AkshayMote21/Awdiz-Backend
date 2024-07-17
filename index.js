import express from "express";
import AllRoutes from "./routes/index.js";
import dotenv from "dotenv";


const app = express();
dotenv.config();
app.use(express.json());

app.post('/',function(req,res){
  res.send("Home Page - Working")
});

app.use('/api/v1', AllRoutes);












app.get('/hello', function (req, res) {
  res.send('Hello Akshay')
});
app.post('/userData', function (req, res) {
  const {name, email , password} = req.body.userData;
  console.log(name , email , password);
  if(name && email && password){
    res.send("Data received successfully.");
  }else{
    res.send("!!!!!!!! All fields are mandatory !!!!!!!!");
  }
});

app.listen(process.env.PORT_NUMBER, () => {
  console.log(`server is running on port ${process.env.PORT_NUMBER}`);
});





