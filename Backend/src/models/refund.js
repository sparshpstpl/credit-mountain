'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class refund extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  refund.init({
    
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
    },
    paymentId: {
      type: DataTypes.INTEGER,
      field: 'payment_id',
    },
    status: {
      type: DataTypes.STRING,
      field:'status'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field:'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field:'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      field:'deleted_at'
    },
  }, {
    sequelize,
    modelName: 'refund',
  });
  return refund;
};