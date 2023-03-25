const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/connection");
const bcrypt = require("bcrypt");
//const sequelize = require(/*insert location of env js path*/);

class Users extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Users.init(
  //columns Username, Passwordhash, id(primarykey)
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pronouns: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      /*         validate: {
                notNull: {
                    msg:
                }
            }*/
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  //link to database connection}

  {
    hooks: {
      // Funtion to encrypt a password
      beforeCreate: async (newUserData) => {
        const salt = bcrypt.genSaltSync();
        newUserData.password = bcrypt.hashSync(newUserData.password, salt);
        return newUserData;
      },

      // Funtion to encrypt a password
      beforeUpdate: async (userData) => {
        const salt = bcrypt.genSaltSync();
        userData.password = bcrypt.hashSync(userData.password, salt);
        return userData;
      },
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "users",
  }
);

module.exports = Users;
