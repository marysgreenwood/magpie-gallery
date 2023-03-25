const Users = require("./users/users");
const Art = require("./art");

Users.hasMany(Art, {
  foreignKey: "artist",
  onDelete: "CASCADE",
});

Art.belongsTo(Users, {
  foreignKey: "artist",
});

module.exports = { Art, Users };
