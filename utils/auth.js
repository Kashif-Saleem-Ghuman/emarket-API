import bcrypt from "bcrypt";

// we will write 2 functions, one for hashing the password and one for comparing the password

// So when the user will send the plain password from the client side, we will hash it and store it in the database and when the user will try to login, we will compare the hashed password with the plain password and if it matches, we will allow the user to login

export const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

export const comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};
