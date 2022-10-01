const { Router } = require('express'); 
 const router = Router(); 
  
  
 router.get('/:name/:age', (req, res, next) => { 
   res.status(200).send({ 
     message: "Hello {name}, you are {age} years old" 
   }) 
 }) 
 module.exports = router;
