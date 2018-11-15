const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

const controllersStudents = {
  addStudent (req, res) {
    const student = req.body
    db('students').insert(student).then((id) => res.status(201).json(id))
  },
  getStudent (req, res) {
    const id = req.params.id
    db('students')
      .join('cohorts', 'students.cohort_id', 'cohorts.id')
      .select('students.id', 'students.name', 'cohorts.name as cohort')
      .where('students.id', id)
      .then((students) => res.status(200).json(students))
  },
  getAllStudent (req, res) {
    db('students').then((students) => res.status(200).json(students))
  },
  updateStudent (req, res) {
    db('students')
      .where('id', req.params.id)
      .update(req.body)
      .then((count) => res.status(200).json(count))
  },
  deleteStudent (req, res) {
    db('students')
      .where('id', req.params.id)
      .del()
      .then((count) => res.status(200).json(count))
  }
}
module.exports = controllersStudents
