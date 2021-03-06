module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('User', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        nickname: {
          allowNull: false,
          type: Sequelize.STRING
        },
        profile_description: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        country: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    },
    async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('User');
    }
  };