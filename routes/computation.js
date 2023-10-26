var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    router.put( m = Math.round(Math.random()*10));
    router.put( n = Math.round(Math.random()*10));
    router.post(a=Math.hypot(m,n));
    router.post(b=Math.ceil(m));
    router.post(c=Math.clz32(n));
    res.send(`hypot applied to ${m} and ${n} is ${a} \n ceil applied to ${m} is ${b} \n clz32 applied to ${n} is ${c}`);

});

module.exports = router;
let m;
let n;
let a;
let b;
let c;

