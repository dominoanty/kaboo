import express from 'express';

const router = express.Router();

router.get('/hello', (req, res, next) => {
    res.send('Hello world');
});


export default router;