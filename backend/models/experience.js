'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Experience.init({
    company: DataTypes.STRING,
    designation: DataTypes.STRING,
    description: DataTypes.TEXT,
    start_date:DataTypes.STRING,
    end_date:DataTypes.STRING,
    experience_image_url:DataTypes.STRING,
    experience_image_public_id:DataTypes.STRING, 
  }, {
    sequelize,
    modelName: 'Experience',
  });
  return Experience;
};