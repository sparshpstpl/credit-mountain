module.exports = (sequelize, DataTypes) => {
    const PaymentType = sequelize.define(
      'payment_types',
      {
        paymentType: {
          type: DataTypes.STRING,
          allowNull: false,
          field:'payment_type'
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
       },
    );
    
    return PaymentType;
  };
  