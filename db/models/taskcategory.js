'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskCategory = sequelize.define('TaskCategory', {
    categoryId: DataTypes.INTEGER,
    taskId: DataTypes.INTEGER
  }, {});
  TaskCategory.associate = function(models) {
    // associations can be defined here
  };
  return TaskCategory;
};
