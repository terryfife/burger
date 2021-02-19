const router = require('express').Router(); 

const burger = require('../models/burger.js');


router.get('/', (req, res) => {
  burger.all((data) => {
    // const hbsObject = {
    //   burgers: [
    //     {
    //       id: 1,
    //       burger_name:"Cheeseburger",
    //       devoured: false
    //     },
    //     {
    //       id: 2,
    //       burger_name:"Hamburger",
    //       devoured: true
    //     }
    //   ]
    // }

    const hbsObject = {
      burgers: data
    }
  
    res.render('index', hbsObject)
  })

  
} )


router.put('/api/burgers/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log('condition', condition);

  burger.update(
    {
      devoured: true,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;