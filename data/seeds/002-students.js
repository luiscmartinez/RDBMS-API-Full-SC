exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate().then(function () {
    // Inserts seed entries
    return knex('students').insert([
      { cohort_id: 1, name: 'Luis' },
      { cohort_id: 2, name: 'Vim' },
      { cohort_id: 3, name: 'Sam' }
    ])
  })
}
