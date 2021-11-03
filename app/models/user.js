const bcrypt = require('bcryptjs');

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

  const encryptPassword = async userData => {
    const salt = await bcrypt.genSalt(15);
    // eslint-disable-next-line require-atomic-updates
    userData.password = await bcrypt.hash(userData.password, salt);
    return userData;
  };

  // eslint-disable-next-line no-unused-vars
  const matchPassword = password => bcrypt.compare(password, this.password);
  User.beforeCreate(encryptPassword);
  User.beforeUpdate(encryptPassword);

  return User;
};
