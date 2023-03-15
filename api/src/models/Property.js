const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
sequelize.define(
    "Property",
    {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    descrition:{
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
    zona:{
        type: DataTypes.STRING,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
    timestamps: false,
    }
);
};
