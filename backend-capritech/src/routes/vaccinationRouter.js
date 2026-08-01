const express = require("express");
const router = express.Router();

const {
    getAllVaccination,
    getVaccinationById,
    createVaccination,
    updateVaccination,
    deleteVaccination
} = require("../controllers/vaccinationController");

/**
 * @swagger
 * tags:
 *   name: Vacunación
 *   description: Gestión de vacunación
 */

/**
 * @swagger
 * /api/vaccination/vaccinationAll:
 *   get:
 *     summary: Obtener todas las vacunaciones
 *     description: Devuelve una lista de todas las vacunaciones registradas
 *     tags:
 *       - Vacunación
 *     responses:
 *       200:
 *         description: Lista de vacunaciones obtenida correctamente
 */
router.get("/vaccinationAll", getAllVaccination);

/**
 * @swagger
 * /api/vaccination/vaccination/{id}:
 *   get:
 *     summary: Obtener una vacunación por ID
 *     tags:
 *       - Vacunación
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la vacunación
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Vacunación obtenida correctamente
 *       404:
 *         description: Vacunación no encontrada
 */
router.get("/vaccination/:id", getVaccinationById);

/**
 * @swagger
 * /api/vaccination/vaccination:
 *   post:
 *     summary: Crear una vacunación
 *     tags:
 *       - Vacunación
 *     responses:
 *       201:
 *         description: Vacunación creada correctamente
 */
router.post("/vaccination", createVaccination);

/**
 * @swagger
 * /api/vaccination/vaccination/{id}:
 *   put:
 *     summary: Actualizar una vacunación
 *     tags:
 *       - Vacunación
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la vacunación
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Vacunación actualizada correctamente
 */
router.put("/vaccination/:id", updateVaccination);

/**
 * @swagger
 * /api/vaccination/vaccination/{id}:
 *   delete:
 *     summary: Eliminar una vacunación
 *     tags:
 *       - Vacunación
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la vacunación
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Vacunación eliminada correctamente
 */
router.delete("/vaccination/:id", deleteVaccination);

module.exports = router;