const Birth = require("../models/birthsModel");

const createBirth = async (data) => {
    try {
        const birth = await Birth.create(data);
        return birth;
    } catch (error) {
        throw error;
    }
};

const getAllBirths = async () => {
    try {
        return await Birth.findAll();
    } catch (error) {
        throw error;
    }
};

const getBirthById = async (id) => {
    try {
        return await Birth.findOne({
            where: { id }
        });
    } catch (error) {
        throw error;
    }
};

const updateBirth = async (id, data) => {
    try {
        await Birth.update(data, {
            where: { id }
        });

        return await Birth.findOne({
            where: { id }
        });
    } catch (error) {
        throw error;
    }
};

const deleteBirth = async (id) => {
    try {
        return await Birth.destroy({
            where: { id }
        });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createBirth,
    getAllBirths,
    getBirthById,
    updateBirth,
    deleteBirth
};