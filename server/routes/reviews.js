import express from 'express';

const router = express.Router();

  router.get("/", (req, res) => {
    res.send('sucessfully opened reviews route.')
  });



export default router;
