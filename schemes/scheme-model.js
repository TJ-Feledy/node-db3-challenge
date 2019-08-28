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

function findSteps() {
  return
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