import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();

app.use(express.urlencoded({extended: true}));
// app.use("/public", express.static(__dirname + "/public"));

main().catch(err => console.log(err));

async function main(){
  mongoose.connect('mongodb://localhost:27017/cbCafeDB')
}

app.route('/')
  .get(function(req, res) {
    res.send('Success')
  });


  const port = 3000;

  app.listen(port, function(){
    console.log('Successfully opened port:3000');
  })
