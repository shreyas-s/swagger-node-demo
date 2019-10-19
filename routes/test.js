const router = require('express').Router();
router.get('/:demo', function(reply, response){
    response.send("Test");
});
module.exports = router;