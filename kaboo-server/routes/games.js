import express from 'express';
import gameSeed from '../gameseed.js';

const router = express.Router();

router.post('/', (req, res, next) => {
    console.table(req.body);
    let w1 = 1 + Math.floor(Math.random() * 500);
    let w2 = 1 + Math.floor(Math.random() * 500);
    console.log(w1, w2);
    res.send({
        websocket_id : '12d12313',
        game_id : gameSeed[w1] + " " + gameSeed[w2],
        host_id : req.body.hostId
    });
});


export default router;