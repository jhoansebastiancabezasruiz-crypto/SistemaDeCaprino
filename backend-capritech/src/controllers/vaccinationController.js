const {
    vaccinationCreate,
    getAllVaccination,
    getVaccinationById,
    vaccinationUpdate,
    vaccinationDelete
} = require("../services/vaccinationService");

const Response = require("../functions/response");

const getAllVaccinations = async (req, res) => {

    try {

        const vaccinations = await getAllVaccination();

        const response = new Response(
            "Lista de vacunaciones",
            vaccinations,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        const response = new Response(
            "Error al obtener las vacunaciones",
            {},
            [error.message]
        );

        return res.status(500).json(response.json);
    }
};

const getVaccinationByIdController = async (req, res) => {

    try {

        const { id } = req.params;

        const vaccination = await getVaccinationById(id);

        if (!vaccination) {

            const response = new Response(
                "Vacunación no encontrada",
                {},
                []
            );

            return res.status(404).json(response.json);
        }

        const response = new Response(
            "Vacunación encontrada",
            vaccination,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        const response = new Response(
            "Error al consultar la vacunación",
            {},
            [error.message]
        );

        return res.status(500).json(response.json);
    }
};

const createVaccination = async (req, res) => {

    try {

        const vaccination = await vaccinationCreate(req.body);

        const response = new Response(
            "Vacunación creada exitosamente",
            vaccination,
            null
        );

        return res.status(201).json(response.json);

    } catch (error) {

        const response = new Response(
            "Error al crear la vacunación",
            {},
            [error.message]
        );

        return res.status(500).json(response.json);
    }
};

const updateVaccination = async (req, res) => {

    try {

        const { id } = req.params;

        const vaccination = await vaccinationUpdate(id, req.body);

        const response = new Response(
            "Vacunación actualizada correctamente",
            vaccination,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        const response = new Response(
            "Error al actualizar la vacunación",
            {},
            [error.message]
        );

        return res.status(500).json(response.json);
    }
};

const deleteVaccination = async (req, res) => {

    try {

        const { id } = req.params;

        await vaccinationDelete(id);

        const response = new Response(
            "Vacunación eliminada correctamente",
            {},
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        const response = new Response(
            "Error al eliminar la vacunación",
            {},
            [error.message]
        );

        return res.status(500).json(response.json);
    }
};

module.exports = {
    getAllVaccination: getAllVaccinations,
    getVaccinationById: getVaccinationByIdController,
    createVaccination,
    updateVaccination,
    deleteVaccination
};