module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'users',
    {
      id_user: { type: DataTypes.INTEGER },
      name: { type: DataTypes.STRING },
      surname: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING }
    },
    {
      timestamps: false
    }
  );
  return User;
};
