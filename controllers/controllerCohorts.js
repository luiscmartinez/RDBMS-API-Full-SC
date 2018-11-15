const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

const controllersCohorts = {
  addCohort (req, res) {
    const cohortName = req.body
    db('cohorts').insert(cohortName).then((id) => res.status(201).json(id))
  },
  getAllCohortStudents (req, res) {
    db('students')
      .select()
      .where('cohort_id', req.params.id)
      .then((students) => res.status(200).json(students))
  },
  getAllCohorts (req, res) {
    db('cohorts').then((cohorts) => res.status(200).json(cohorts))
  },
  getSingleCohort (req, res) {
    db('cohorts')
      .where('id', req.params.id)
      .then((cohort) => res.status(200).json(cohort))
  },
  updateCohort (req, res) {
    db('cohorts')
      .where('id', req.params.id)
      .update(req.body)
      .then((count) => res.status(200).json(count))
  },
  deleteCohort (req, res) {
    db('cohorts')
      .where('id', req.params.id)
      .del()
      .then((count) => res.status(200).json(count))
  }
}
module.exports = controllersCohorts
