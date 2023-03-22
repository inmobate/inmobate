const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
sequelize.define(
    "Booking",
    {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    date_of_admission:{
        type: DataTypes.DATE(6),
        allowNull: false,
    },
    departure_date:{
        type: DataTypes.DATE(6),
        allowNull: false,
    },
    total_price:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
    {
    timestamps: false,
    }
);
};