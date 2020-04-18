'use strict';
require('dotenv').config()
const { hashPassword } = require('../helpers/bcrypt');
let pass = hashPassword('rahasia')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Admins', [{
      email: 'admin@gmail.com',
      password: pass,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Admins', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
