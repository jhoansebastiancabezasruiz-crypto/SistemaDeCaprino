const db = require("../config/conectionDB");
const { DataTypes } = require("sequelize");

const Birth = db.define("Birth", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },

    raza: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    sexo: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    chapeta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },

    pesoNacimiento: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },

    chapetaMadre: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    nombreMadre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    razaMadre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    chapetaPadre: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    nombrePadre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    razaPadre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    gananciaPeso: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },

    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }

}, {
    tableName: "births",
    timestamps: true
});

module.exports = Birth;