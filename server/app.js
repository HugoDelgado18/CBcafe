
import express from 'express';
import https from 'https';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();

app.use(express.urlencoded({extended: true}));
// app.use("/public", express.static(__dirname + "/public"));

main().catch(err => console.log(err));

async function main(){
  mongoose.connect('mongodb://localhost:27017/cbCafeDB')
}

const reviewSchema = new mongoose.schema({
  name: String,
  rating: {
    type: Number,
    required: {$gte: 5}
  },
  content: String
});

const Review = mongoose.model("Review", reviewSchema);

const review = new Review({
  name: Leah,
  rating: 5,
  content: "This place is great!!"
})




app.route('/')
  .get(function(req, res) {

    res.send('Success')
  })
  .post(function(req, res){
    let rName = req.body.reviewName;
    let rRating = req.body.reviewRating;
    let rContent = req.body.reviewContent;

    const reviewNew = new Review({
      name: rName,
      rating: rRating,
      content: rContent
    })

    reviewNew.save(function(err){
      if (err){
        console.log(err);
      } else {
        res.redirect("/")
      }
    })

  });


  const port = 3000;

  app.listen(port, function(){
    console.log('Successfully opened port:3000');
  })
