module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    _id: {
      type: DataTypes.INTEGER,
      field: "_id",
      autoIncrement: !0,
      primaryKey: !0
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  const User = require("./User")(sequelize, DataTypes);
  User.hasOne(Comment, {foreignKey: 'userId'});
  Comment.belongsTo(User);

  const Task = require("./Task")(sequelize, DataTypes);
  Task.hasMany(Comment, {foreignKey: 'taskId'});
  Comment.belongsTo(Task);

  return Comment;
}
