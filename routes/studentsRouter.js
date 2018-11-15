const router = require('express').Router()
const { students } = require('../controllers')

router.post('/', students.addStudent)

router.get('/:id', students.getStudent)

router.get('/', students.getAllStudent)

router.put('/:id', students.updateStudent)

router.delete('/:id', students.deleteStudent)
module.exports = router
