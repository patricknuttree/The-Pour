'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Variations', [{
        whiskeyId: 1,
        userId: 1,
        cocktailName: 'Old Fashioned',
        cocktailPhoto: 'https://images.unsplash.com/photo-1595977437232-9a0426ebfe4c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2xkJTIwZmFzaGlvbmVkJTIwZHJpbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        rating: 5,
        review: 'Its a classic for a reason, Made better with an old timey whiskey.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        whiskeyId: 1,
        userId: 2,
        cocktailName: 'Manhattan',
        cocktailPhoto: 'https://images.unsplash.com/photo-1547595429-da06b6a5080a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFuaGF0dGFuJTIwZHJpbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        rating: 2,
        review: 'Its good drink just had a bad whiskey',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        whiskeyId: 1,
        userId: 3,
        cocktailName: 'Manhattan',
        cocktailPhoto: 'https://images.unsplash.com/photo-1595977437232-9a0426ebfe4c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2xkJTIwZmFzaGlvbmVkJTIwZHJpbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        rating: 3,
        review: 'Good Standby drink, but this whiskey is more of a sipping whiskey.',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Variations', null, {});
  }
};
