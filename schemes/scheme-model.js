db = require('../data/db-config.js')

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}

function find() {
  return db('schemes')
}

function findById(id) {
  if (id) {
    return db('schemes').where({id}).first()
  }else {
    return null
  }
}

function findSteps(scheme_id) {
  return db('steps as s')
  .join('schemes as sc', 'sc.id', 's.scheme_id')
  .select('sc.scheme_name', 's.step_number', 's.instructions')
  .where(scheme_id)
}

function add() {
  return
}

function update() {
  return
}

function remove() {
  return
}