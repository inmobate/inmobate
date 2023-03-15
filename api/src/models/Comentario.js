const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
sequelize.define(
    "Comentario",
    {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    content:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
    timestamps: false,
    }
);
};