const db = require('../config/conectionDB');
const {DataTypes} = require('sequelize');

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        max: 590,
        min:3,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    documentId:{
        type: DataTypes.STRING,
        max: 30,
        min: 5,
        allowNull: false,
        unique: true
    },
    postJobs: {
        type: DataTypes.STRING,
        defaultValue: "false"
    },
    verifyEmail: {
        type: DataTypes.STRING,
        defaultValue: "false"
    }
});

module.exports = User;