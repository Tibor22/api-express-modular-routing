
const express = require('express');
const router = express.Router()
let { users } = require('../../data.js')


router.get('/',(req, res) => {
       console.log(users);
       res.json({users})
})
router.get('/:id',(req, res) => {
    const user=users.find(users => users.id === +req.params.id)
       res.json({user})
})

router.post('/',(req, res) => {
  let id = users.length +1
    const user={...req.body,id}
    users.push(user)
       res.json({user})
})
router.delete('/:id',(req, res) => {
    const user=users.find(users => users.id === +req.params.id)
    users = users.filter(users => users.id !== +req.params.id)
       res.json({user})
})
router.put('/:id',(req, res) => {
     users = users.map(user => {
        if(user.id === +req.params.id) {
            return {...req.body,id: user.id}
        } else return user
    } )
    const user= users.find(users => users.id === +req.params.id)
       res.json({user})
})


module.exports = router
