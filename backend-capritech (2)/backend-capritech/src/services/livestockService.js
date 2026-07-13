const Livestock = require('../models/livestockModel');

const livestockCreate = async (data) => {
    try {
        const newLivestock = await Livestock.create(data);
        return newLivestock;
    } catch (error) {
        console.log(error);
    }
};

const getAllLivestock = async () => {
    try {
        const Livestock = await Livestock.findAll();
        return Livestock;
    } catch (error) {
        console.log(error);
    }
};
                                                                                                                                                                                                                                            
const getIdLivestock = async (id) => {
    try {
        const Livestockid = await Livestock.findOne({where: {id}});
        return Livestockid;
    } catch (error) {
        console.log(error);
    }
};

const deleteIdLivestock = async (id) => {
    try {
        const deleteLivestock = await Livestock.destroy({where: {id}});
        return deleteLivestock;
    } catch (error) {
        console.log(error);
    }
};

const updateLivestock = async (id, data) => {
    try {
        const updateLivestock = await Livestock.update(data, {where: {id}}); 
        return updateLivestock;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    livestockCreate,
    getAllLivestock,
    getIdLivestock,
    deleteIdLivestock,
    updateLivestock
};