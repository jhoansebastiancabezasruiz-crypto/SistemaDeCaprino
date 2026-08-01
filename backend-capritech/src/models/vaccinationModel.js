const db = require("../config/conectionDB");
const { DataTypes } = require("sequelize");

const Vaccination = db.define("Vaccination", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    chapeta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    fechaVacunacion: {
        type: DataTypes.DATE,
        allowNull: false
    },

    horaVacunacion: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

    nombreVacuna: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    responsable: {
        type: DataTypes.STRING(100),
        allowNull: false
    }

}, {
    tableName: "vaccinations",
    timestamps: true
});

module.exports = Vaccination;