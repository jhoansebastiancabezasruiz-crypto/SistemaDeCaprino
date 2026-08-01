const Vaccination = require("../models/vaccinationModel");

const vaccinationCreate = async (data) => {
    try {
        return await Vaccination.create(data);
    } catch (error) {
        throw error;
    }
};

const getAllVaccination = async () => {
    try {
        return await Vaccination.findAll();
    } catch (error) {
        throw error;
    }
};

const getVaccinationById = async (id) => {
    try {
        return await Vaccination.findOne({
            where: { id }
        });
    } catch (error) {
        throw error;
    }
};

const vaccinationUpdate = async (id, data) => {
    try {

        await Vaccination.update(data, {
            where: { id }
        });

        return await Vaccination.findOne({
            where: { id }
        });

    } catch (error) {
        throw error;
    }
};

const vaccinationDelete = async (id) => {
    try {
        return await Vaccination.destroy({
            where: { id }
        });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    vaccinationCreate,
    getAllVaccination,
    getVaccinationById,
    vaccinationUpdate,
    vaccinationDelete
};