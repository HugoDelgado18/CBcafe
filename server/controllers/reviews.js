import postReview from '../models/postReview.js';


export const getReviews = async (req, res) => {
    try {

      const postReviews = await postReview.find();

      console.log(postReviews);

      res.status(200).json(postReviews);
    } catch (error) {

      res.status(404).json({message: error.message});
    }
  }

export const createReviews = async (req, res) => {
  const review = req.body;

  const newReview = new postReview(review)
    try {
      await newReview.save();

      res.status(200).json(newReview)
    } catch (error) {

      res.status(409).json({message: error.message})
    }
}
