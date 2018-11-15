const cohortRouter = require('./cohortRouter')
const studentRouter = require('./studentsRouter')
module.exports = (server) => {
  server.use('/api/cohorts', cohortRouter)
  server.use('/api/students', studentRouter)
}
