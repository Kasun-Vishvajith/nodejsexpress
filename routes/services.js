const express = require('express');
const router = express.Router();

/* GET services page. */
router.get('/', (req, res) => {
  res.render('services', {
    title: 'Our Services',   
  });
});

module.exports = router;
