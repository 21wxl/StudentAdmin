const express = require('express');

let router = express.Router();

//路由请求 /student/msg/banji
router.get('/',(req,res)=>{
    res.send('msg下的banji');
})
router.get('/:hao',(req,res)=>{
    res.json(req.params.hao);
})

module.exports = router;