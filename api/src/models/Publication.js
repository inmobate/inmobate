const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Publication",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      public_data: {
        type: DataTypes.DATE,
        allowNull:false
    },
    title:{
        type: DataTypes.STRING,
        allowNull:false
    }
    },
    {
      timestamps: false,
    }
  );
};
