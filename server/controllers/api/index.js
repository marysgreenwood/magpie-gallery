const router = require('express').Router();
const userRoutes = require('./userRoutes');
const artRoutes= require('./artRoutes');

router.use('/users', userRoutes);
router.use('/art', artRoutes);

module.exports = router;