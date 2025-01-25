const express = require('express');
const router = express.Router();
const { getStockData } = require('../alphaVantage');

router.get('/stock', async (req, res) => {
  const { symbol } = req.query;
  if (!symbol) {
    return res.status(400).json({ message: 'Stock symbol is required.' });
  }

  try {
    const data = await getStockData(symbol);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
