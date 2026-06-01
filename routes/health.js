const express = require('express');
const router = express.Router();

/* GET health check endpoint */
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    message: 'CI/CD Pipeline Deployment Successful'
  });
});

module.exports = router;
