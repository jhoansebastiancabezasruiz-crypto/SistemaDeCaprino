const {
    createBirth,
    getAllBirths,
    getBirthById,
    updateBirth,
    deleteBirth
} = require("../services/birthsService");

const getAllBirthsController = async (req, res) => {

    try {

        const births = await getAllBirths();

        res.status(200).json({
            success: true,
            message: "Lista de nacimientos",
            data: births
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getBirthsById = async (req, res) => {

    try {

        const { id } = req.params;

        const birth = await getBirthById(id);

        if (!birth) {

            return res.status(404).json({
                success: false,
                message: "Nacimiento no encontrado"
            });

        }

        res.status(200).json({
            success: true,
            data: birth
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const createBirths = async (req, res) => {

    try {

        const birth = await createBirth(req.body);

        res.status(201).json({
            success: true,
            message: "Nacimiento creado correctamente",
            data: birth
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const updateBirths = async (req, res) => {

    try {

        const { id } = req.params;

        const birth = await updateBirth(id, req.body);

        res.status(200).json({
            success: true,
            message: "Nacimiento actualizado",
            data: birth
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const deleteBirths = async (req, res) => {

    try {

        const { id } = req.params;

        await deleteBirth(id);

        res.status(200).json({
            success: true,
            message: "Nacimiento eliminado correctamente"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    getAllBirths: getAllBirthsController,
    getBirthsById,
    createBirths,
    updateBirths,
    deleteBirths
};