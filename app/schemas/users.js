exports.createUserSchema = {
  firstName: {
    in: ['body'],
    exists: {
      errorMessage: 'The firstname cannot be empty'
    }
  },
  lastName: {
    in: ['body'],
    exists: {
      errorMessage: 'The lastname cannot be empty'
    }
  },
  email: {
    in: ['body'],
    exists: {
      errorMessage: 'The email cannot be empty'
    },
    isEmail: {
      errorMessage: 'email invalid'
    },
    matches: {
      options: [/@wolox.com/],
      errorMessage: 'Invalid email domain'
    }
  },
  password: {
    in: ['body'],
    exists: {
      errorMessage: 'The password cannot be empty'
    },
    isLength: {
      options: {
        min: 8
      },
      errorMessage: 'Password must contain at least 8 characters'
    },
    matches: {
      options: [/^[a-z0-9]+$/i],
      errorMessage: 'Password can only contain alphanumeric characters'
    }
  }
};
