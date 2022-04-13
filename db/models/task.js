'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    description: DataTypes.TEXT,
    timeframe: DataTypes.DATE,
    cost: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    listId: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    const columnMap = {
      through: "TaskCategories",
      otherKey: "categoryId",
      foreignKey: "taskId"
    }
    Task.belongsTo(models.List, {foreignKey: "listId"});
    Task.hasMany(models.Comment, {foreignKey: "taskId"});
    Task.hasMany(models.Like, {foreignKey: "taskId"});
    Task.belongsToMany(models.Category, columnMap);
  };
  return Task;
};
