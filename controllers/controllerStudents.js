const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

const controllersStudents = {
  addStudent (req, res) {
    if (!req.body.name || req.body.length <= 0) {
      next(new Error('EMPTY BODY'))
    }
    const student = req.body
    db('students').insert(student).then((id) => res.status(201).json(id))
  },
  getStudent (req, res, next) {
    const id = req.params.id
    db('students')
      .join('cohorts', 'students.cohort_id', 'cohorts.id')
      .select('students.id', 'students.name', 'cohorts.name as cohort')
      .where('students.id', id)
      .then((students) => res.status(200).json(students))
      .catch(next)
  },
  getAllStudent (req, res, next) {
    db('students')
      .then((students) => res.status(200).json(students))
      .catch(next)
  },
  updateStudent (req, res, next) {
    if (req.body.name.length <= 0) {
      next(new Error('needs update content'))
    }
    db('students').where('id', req.params.id).update(req.body).then((count) => {
      if (count <= 0) {
        next(new Error('ID NOT FOUND'))
      }
      res.status(200).json(count)
    })
  },
  deleteStudent (req, res, next) {
    db('students')
      .where('id', req.params.id)
      .del()
      .then((count) => {
        if (count <= 0) {
          next(new Error('ID NOT FOUND'))
        }
        res.status(200).json(count)
      })
      .catch(next)
  }
}
module.exports = controllersStudents
