var express = require('express');
var router = express.Router();
var x = Math.random();
var y = Math.random();
/* GET users listing. */
router.get('/', function(req, res, next) {
  var result1 = Math.asin(x / y);
  var result2 = Math.cos(x);
  var result3 = Math.asinh(x);
  res.send(`asin [fn] applied to [${x}] [${y}] is: ${result1} 
            <br> cos [fn] applied to [${x}] is: ${result2}
            <br> asinh [fn] applied to [${x}] is: ${result3}`)
});

module.exports = router;
