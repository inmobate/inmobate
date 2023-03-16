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
    city:{
        type: DataTypes.STRING,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    room:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING,
<<<<<<< HEAD
=======
        allowNull: false
    },
    picture:{
        type: DataTypes.ARRAY(DataTypes.STRING),
>>>>>>> c87b0e03dc41282d926702868a70d234c9c6a5ec
        allowNull: false
    }
},
    {
    timestamps: false,
    }
);
};
