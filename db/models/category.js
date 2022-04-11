'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    const columnMap = {
      through: "TaskCategories",
      otherKey: "taskId",
      foreignKey: "categoryId"
    }
    Category.belongsToMany(models.Task, columnMap);
    Category.belongsTo(models.User, {foreignKey: "userId"});
  };
  return Category;
};
