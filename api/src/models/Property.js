const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
sequelize.define(
    "Property",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    area:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bathrooms:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    garage:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    city:{
        type: DataTypes.STRING,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    wifi:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    room:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    picture:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    }
},
    {
    timestamps: false,
    }
);
};
