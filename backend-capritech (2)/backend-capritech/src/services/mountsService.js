const Mounts = require('../models/mountsModel');

const mountCreate = async (data) => {
    try {
        const newMount = await Mounts.create(data);
        return newMount;
    } catch (error) {
        console.log(error);
    }
};

const getAllMounts = async () => {
    try {
        const Mounts = await Mounts.findAll();
        return Mounts;
    } catch (error) {
        console.log(error);
    }
};

const getIdMount = async (id) => {
    try {
        const Mountid = await Mounts.findOne({where: {id}});
        return Mountid;
    } catch (error) {
        console.log(error);
    }
};

const deleteIdMount = async (id) => {
    try {
        const deleteMount = await Mounts.destroy({where: {id}});
        return deleteMount;
    } catch (error) {
        console.log(error);
    }
};

const updateMount = async (id, data) => {
    try {
        const updateMount = await Mounts.update(data, {where: {id}}); 
        return updateMount;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    mountCreate,
    getAllMounts,
    getIdMount,
    deleteIdMount,
    updateMount
};