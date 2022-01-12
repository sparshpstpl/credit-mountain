module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'users',
    {
      fullName: {
        type: DataTypes.STRING,
        // allowNull: false,
        field:'full_name'
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        field:'email'
      },
      password: {
        type: DataTypes.STRING,
        field:'password'
      },
      cardId: {
        type: DataTypes.STRING,
        field:'card_id'
      },
      type: {
        type: DataTypes.STRING,
        defaultValue: 'user',
        field:'type'
      },
      customerId: {
        type: DataTypes.STRING,
        field:'customer_id'
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
  
  return User;
};
