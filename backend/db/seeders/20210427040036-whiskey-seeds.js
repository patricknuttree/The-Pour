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

      return queryInterface.bulkInsert('Whiskeys', [{
        userId: 1,
        name: 'Templetons: The Good Stuff',
        distiller: 'Templetons Distillery',
        drinkPhoto: 'https://d256619kyxncpv.cloudfront.net/gui/img/2019/03/19/11/2019031911_templeton_6yo_rye_whisky_shadow_original.png',
        rating: 5,
        review: 'Fantastic whiskey from a great distiller.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'Bulleit',
        distiller: 'Bulleit',
        drinkPhoto: 'https://images.unsplash.com/photo-1607547023952-cac63c478dc0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHdoaXNrZXl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        rating: 2,
        review: 'Mediocre whiskey, nasty hangover.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: 'Knob Creek: Bourbon',
        distiller: 'Knob Creek',
        drinkPhoto: 'https://images.unsplash.com/photo-1595563848340-a470e191c69c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHdoaXNrZXl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        rating: 3.5,
        review: 'Solid whiskey, best neat.',
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
      return queryInterface.bulkDelete('Whiskeys', null, {});
  }
};
