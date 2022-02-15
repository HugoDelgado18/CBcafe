import express from 'express';
const app = express();


app.use(express.urlencoded({extended: true}));


app.route('/')
  .get(function(req, res) {
    res.send('Success')
  });


  const port = 3000;

  app.listen(port, function(){
    console.log('Successfully opened port:3000');
  })
