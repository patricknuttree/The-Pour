'use strict';

const faker = require('faker');
const bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        email: 'demo@user.io',
        username: 'Demo-lition',
        userPhoto: 'https://images.unsplash.com/photo-1588281345136-9893252095bd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXhwbG9zaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        userBio: 'I am a demo user. I am hear to let you see the explosive potential of this app and the far greater explosive potential of this great developer. Please give their body of work a look in the about section.',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        userPhoto: null,
        userBio: null,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        userPhoto: null,
        userBio: null,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', {
        username: {[Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2']}
      }, {});
  }
};
