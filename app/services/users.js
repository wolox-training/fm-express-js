const { User } = require('../models');

exports.newUser = async userData => {
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const passwordRegex = /^[a-z0-9]+$/i;
  if (passwordRegex.test(userData.password)) {
    if (emailRegex.test(userData.email)) {
      if (userData.email.endsWith('@wolox.com')) {
        const emails = await User.findAll({ where: { email: userData.email } });
        if (emails.length >= 1) {
          throw new Error('This email already exists');
        }
        if (userData.password.length <= 7) {
          throw new Error('the password must contain at least 8 characters');
        }
        User.create(userData);
        return 'user created successfully';
      }
      throw new Error('Invalid email domain');
    }
    throw new Error('Invalid email');
  }
  throw new Error('Password can only contain alphanumeric characters');
};
