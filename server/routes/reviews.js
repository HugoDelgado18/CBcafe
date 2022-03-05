import express from 'express';

import { getReviews, createReviews } from '../controllers/reviews.js';

const router = express.Router();

  router.get("/", getReviews );

  route.post("/", createReviews);


export default router;
