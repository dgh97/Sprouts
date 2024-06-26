const express = require('express');
const router = express.Router();
const controller = require('../controllers/homeController');

// Sample products for demonstration purposes
const products = [
    {
        id: 1,
        name: 'Organic Broccoli',
        price: 2.99,
        imageUrl: '/images/productEG.webp'
    },
    {
        id: 2,
        name: 'Fresh Carrots',
        price: 1.99,
        imageUrl: '/images/productEG.webp'
    },
    {
        id: 3,
        name: 'Green Peppers',
        price: 3.49,
        imageUrl: '/images/productEG.webp'
    },
    {
        id: 1,
        name: 'Organic Broccoli',
        price: 2.99,
        imageUrl: '/images/productEG.webp'
    },
    {
        id: 2,
        name: 'Fresh Carrots',
        price: 1.99,
        imageUrl: '/images/productEG.webp'
    },
    {
        id: 3,
        name: 'Green Peppers',
        price: 3.49,
        imageUrl: '/images/productEG.webp'
    },
    {
        id: 1,
        name: 'Organic Broccoli',
        price: 2.99,
        imageUrl: '/images/productEG.webp'
    },
    {
        id: 2,
        name: 'Fresh Carrots',
        price: 1.99,
        imageUrl: '/images/productEG.webp'
    },
    {
        id: 3,
        name: 'Green Peppers',
        price: 3.49,
        imageUrl: '/images/productEG.webp'
    }
];

// Home route
router.get('/', (req, res) => {
    res.render('home', { products });
});

module.exports = router;
