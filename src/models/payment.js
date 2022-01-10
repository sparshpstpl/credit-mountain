module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define(
      'payments',
      {
        userId: {
          type: DataTypes.STRING,
          allowNull: false,
          field:'user_id'
        },
        amount: {
          type: DataTypes.STRING,
          allowNull: false,
          field:'amount'
        },
        paymentTypeId: {
          type: DataTypes.STRING,
          field:'payment_type_id'
        },
        isRefunded: {
          type: DataTypes.STRING,
          field:'is_refunded'
        },
        paymentGatewayId: {
          type: DataTypes.STRING,
          field:'payment_gateway_id'
        },
        paymentId: {
          type: DataTypes.STRING,
          field:'payment_id'
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

    Payment.associate = function (models) {
        Payment.belongsTo(models.users, {
            targetKey: 'id',
            foreignKey: 'user_id',
            as: 'users'
        });
    };

    // Payment.associate = function (models) {
    //     Payment.belongsTo(models.payment_type, {
    //         targetKey: 'payment_type',
    //         foreignKey: 'payment_type_id',
    //         as: 'payment_type'
    //     });
    // };
    
    return Payment;
  };
  