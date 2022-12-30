const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { JWT_SECRET } = require("../config/server-config");
const UserRepository = require("../repository/user-repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw error;
    }
  }

  async destroy(userId) {
    try {
      const response = await this.destroy(userId);
      return response;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw error;
    }
  }

  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_SECRET, { expiresIn: "1d" });
      return result;
    } catch (error) {
      console.log("Something went wrong in token creation");
      throw error;
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_SECRET);
      return response;
    } catch (error) {
      console.log("Something went wrong in token validation");
      throw error;
    }
  }

  checkPassword(userInputPlainPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
    } catch (error) {
      console.log("Something went wront in password comparision");
      throw error;
    }
  }
}

module.exports = UserService;
