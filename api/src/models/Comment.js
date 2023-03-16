const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
sequelize.define(
    "Comment",
    {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    content:{
        type: DataTypes.TEXT,
        allowNull: false,
    }
},
    {
    timestamps: false,
    }
);
};