const { encryptPassword } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, notNull: true, autoIncrement: true },
      firstName: { type: DataTypes.STRING },
      lastName: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING }
    },
    {
      timestamps: true,
      underscored: true
    }
  );

  User.beforeCreate(encryptPassword);
  User.beforeUpdate(encryptPassword);

  return User;
};
