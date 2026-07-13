const Production = require('../models/producctionModel');

const productionCreate = async (data) => {
    try {
        const newProduction = await Production.create(data);
        return newProduction;
    } catch (error) {
        console.log(error);
    }
};

const getAllProduction = async () => {
    try {
        const Production = await Production.findAll();
        return Production;
    } catch (error) {
        console.log(error);
    }
};

const getIdProduction = async (id) => {
    try {
        const Productionid = await Production.findOne({where: {id}});
        return Productionid;
    } catch (error) {
        console.log(error);
    }
};

const deleteIdProduction = async (id) => {
    try {
        const deleteProduction = await Production.destroy({where: {id}});
        return deleteProduction;
    } catch (error) {
        console.log(error);
    }
};

const updateProduction = async (id, data) => {
    try {
        const updateProduction = await Production.update(data, {where: {id}}); 
        return updateProduction;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    productionCreate,
    getAllProduction,
    getIdProduction,
    deleteIdProduction,
    updateProduction
};