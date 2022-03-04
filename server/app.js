import 'dotenv/config';
import express from 'express';
import https from 'https';
import cors from 'cors';
import mongoose from 'mongoose';

import reviewRoutes from './routes/reviews.js';

const app = express();

app.use('/reviews', reviewRoutes);

app.use(express.urlencoded({extended: true}));
app.use(cors());
// app.use("/public", express.static(__dirname + "/public"));

main().catch(err => console.log(err));

async function main(){
  mongoose.connect(`${process.env.ATLAS_KEY}`)
};





  app.listen(process.env.PORT || 3000, function(){
    console.log('Successfully opened port:3000');
  })
