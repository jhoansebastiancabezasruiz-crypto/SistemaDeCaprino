const {
    userCreate,
    userGetById,
    usuarioDelete,
    userUpdate,
    getAllUsers: getAllUsersService
} = require("../services/userService");

// IMPORTACIÓN CORRECTA
const Response = require("../functions/response");
const path = require("path");
const fs = require("fs");
const { sendEmail } = require("../services/emailService");

const getAllUsers = async (req, res) => {
    try {
        const users = await getAllUsersService();

        const response = new Response(
            "Obteniendo todos los usuarios",
            users,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error(error);

        const response = new Response(
            "Error al obtener los usuarios",
            {},
            [error.message]
        );

        return res.status(500).json(response.json);
    }
};

const getUserById = async (req, res) => {

    const { id } = req.params;

    try {

        const errores = [];

        if (!id || id === "") {
            errores.push("El ID es obligatorio");
        }

        if (errores.length > 0) {
            const response = new Response(
                "Error al consultar el usuario",
                {},
                errores
            );

            return res.status(400).json(response.json);
        }

        const user = await userGetById(id);

        if (!user) {
            const response = new Response(
                "Usuario no encontrado",
                {},
                []
            );

            return res.status(404).json(response.json);
        }

        const response = new Response(
            `Obteniendo el usuario con ID: ${id}`,
            user,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error(error);

        const response = new Response(
            "Error en la consulta del usuario",
            {},
            [error.message]
        );

        return res.status(500).json(response.json);
    }
};

const createUser = async (req, res) => {

    const { name, email, password, documentId, postJobs } = req.body;

    const errores = [];

    if (!name) errores.push("El nombre es obligatorio.");
    if (!email) errores.push("El correo es obligatorio.");
    if (!password) errores.push("La contraseña es obligatoria.");
    if (!documentId) errores.push("El documento es obligatorio.");
    if (!postJobs) errores.push("El cargo es obligatorio.");

    if (errores.length > 0) {

        const response = new Response(
            "Error en la creación del usuario",
            {},
            errores
        );

        return res.status(400).json(response.json);
    }

    try {

        const user = await userCreate({
            name,
            email,
            password,
            documentId,
            postJobs
        });

        // PASO 1: leer configuración → plantilla envío JSON
        let templatePath = path.join(process.cwd(), "public", "templates", "configEmail.json");
        const confirmEmailTemplate = fs.readFileSync(templatePath, "utf-8");
        // PASO 2: sacar propiedades (código)
        const dataTemplate = JSON.parse(confirmEmailTemplate);
         // PASO 3: leer archivo HTML
        const htmlPath = path.join(process.cwd(), "public", "templates", dataTemplate.html);
        const templatehtml = fs.readFileSync(htmlPath, "utf-8");
         // PASO 4: reemplazar propiedades
        var htmlModificado = templatehtml.toString();
           const valores = {
            "@name": user.name,
            "@link": `http://localhost:3001/confirmar/${user.id}`,
            "@nameBtn": "Confirmar cuenta",
            "@cuentaEmpresa": "CapriTech",
        };
        for (const key in valores) {
            const regex = new RegExp(key, "g");
            htmlModificado = htmlModificado.replace(regex, valores[key]);
        }

        // PASO 5: enviar correo
        await sendEmail(user.email, dataTemplate.subject, "Confirma tu correo para activar tu cuenta", htmlModificado);

        

        const response = new Response(
            "Usuario creado exitosamente",
            user,
            null
        );

        return res.status(201).json(response.json);

    } catch (error) {

       console.error(error);

const errores = error.errors
    ? error.errors.map(e => e.message)
    : [error.message];

const response = new Response(
    "Error interno al crear el usuario",
    {},
    errores
);
        return res.status(500).json(response.json);
    }
};

const updateUser = async (req, res) => {

    const { id } = req.params;
    const { name, email, password, documentId, postJobs } = req.body;

    try {

        const errores = [];

        if (!id || id === "") {
            errores.push("El ID es obligatorio");
        }

        if (errores.length > 0) {

            const response = new Response(
                "Error al actualizar el usuario",
                {},
                errores
            );

            return res.status(400).json(response.json);
        }

        const updatedUser = await userUpdate(id, {
            name,
            email,
            password,
            documentId,
            postJobs
        });

        const response = new Response(
            "Usuario actualizado correctamente",
            updatedUser,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error(error);

        const response = new Response(
            "Error interno al actualizar el usuario",
            {},
            [error.message]
        );

        return res.status(500).json(response.json);
    }
};

const deleteUser = async (req, res) => {

    const { id } = req.params;

    try {

        const errores = [];

        if (!id || id === "") {
            errores.push("El ID es obligatorio");
        }

        if (errores.length > 0) {

            const response = new Response(
                "Error al eliminar el usuario",
                {},
                errores
            );

            return res.status(400).json(response.json);
        }

        const deleted = await usuarioDelete(id);

        if (!deleted) {

            const response = new Response(
                "Usuario no encontrado",
                {},
                []
            );

            return res.status(404).json(response.json);
        }

        const response = new Response(
            `Usuario con ID ${id} eliminado exitosamente`,
            deleted,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error(error);

        const response = new Response(
            "Error interno al eliminar el usuario",
            {},
            [error.message]
        );

        return res.status(500).json(response.json);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};