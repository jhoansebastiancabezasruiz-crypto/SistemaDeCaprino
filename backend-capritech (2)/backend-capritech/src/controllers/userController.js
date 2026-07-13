const { userCreate } = require('../services/userService');
const Response = require("../functions/response");

const getAllUsers = (req, res) => {
    console.log("Obteniendo todos los usuarios");

    res.status(200).json({
        mensaje: "Obteniendo todos los usuarios"
    });
};

const getUserById = (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        mensaje: `Obteniendo el usuario con ID: ${id}`
    });
};

const createUser = async (req, res) => {
    try {
        const { name, email, password, documentId, postJob } = req.body;

        let errores = [];

        if (!name || !email || !password || !documentId || !postJob) {
            errores.push({
                mensaje: "Todos los campos son obligatorios"
            });
        }

        if (errores.length > 0) {
            const response = new Response(
                "Error en la creación del usuario",
                null,
                errores
            );

            return res.status(400).json(response.json);
        }

        const data = {
            name,
            email,
            password,
            documentId,
            postJob
        };

        const user = await userCreate(data);

        const response = new Response(
            true,
            "Usuario creado exitosamente",
            user
        );

        return res.status(201).json(response.json);

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
};

const updateUser = (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        mensaje: `Actualizando el usuario con ID: ${id}`
    });
};

const deleteUser = (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        mensaje: `Eliminando el usuario con ID: ${id}`
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};