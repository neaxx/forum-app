const express = require('express');


const Thread = require('../models/Thread');


const router = express.Router();


router.get('/', async (req, res) => {

  const threads = await Thread.find();
  console.log(threads);
  res.json({
    data: threads,
  });
});

router.post('/', (req, res, next) => {
  console.log(req.body);

  Thread.create(req.body)
    .then(thread => {
      res.status(201)
        .json(thread);
    })
    .catch(err => {
      res.status(400);
      next(err);
    });
});


module.exports = router;