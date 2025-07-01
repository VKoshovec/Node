const express=require('express');
const router= express.Router();

router.get('/', (req,res)=>{ res.send('Hi API!')});

router.get('/test', (req,res)=>{ res.send('Hi test API!')});

module.exports = router;