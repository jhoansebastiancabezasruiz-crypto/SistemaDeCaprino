const {livestockCreate} = require('../services/livestockService');
const Response = require("../functions/response");

const getAllLivestock = (req, res) => {
    const body = req.body;
    console.log("body recibido: ", body);
    res.status(201);
    res.json({mensaje: "Obteniendo todos los animales"});
}

const getLivestockById = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Obteniendo el animal con ID: ${id}`});
}

const createLivestock = async(req, res) => {
    const {chapeta, raza, nombre, fechaNacimiento, sexo, etapaProduccion, observaciones} = req.body;

    var errores = [];

    if(!chapeta || !raza || !nombre || !fechaNacimiento || !sexo || !etapaProduccion || !observaciones){
        errores.push({mensaje: "Todos los campos son obligatorios"});
    }
    if(chapeta == ""){
        errores.push({mensaje: "El campo chapeta no puede estar vacio"});
    }
    if(raza == ""){
        errores.push({mensaje: "El campo raza no puede estar vacio"});
    }
    if(nombre == ""){
        errores.push({mensaje: "El campo nombre no puede estar vacio"});
    }
    if(fechaNacimiento == ""){
        errores.push({mensaje: "El campo fechaNacimiento no puede estar vacio"});
    }
    if(sexo == ""){
        errores.push({mensaje: "El campo sexo no puede estar vacio"});
    }
    if(etapaProduccion == ""){
        errores.push({mensaje: "El campo etapaProduccion no puede estar vacio"});
    }
    if(observaciones == ""){
        errores.push({mensaje: "El campo observaciones no puede estar vacio"});
    }
    if(errores.length > 0){
        var response = new Response("Error en la creación del semoviente", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }

    data = {chapeta, raza, nombre, fechaNacimiento, sexo, etapaProduccion, observaciones};
    const livestock = await livestockCreate(data);
    var response = new Response(true, "Semoviente creado exitosamente", livestock);
    res.status(201);
    res.json(response.json);
}

const updateLivestock = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Actualizando el animal con ID: ${id}`});
}

const deleteLivestock = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Eliminando el animal con ID: ${id}`});
}

module.exports = {
    getAllLivestock,
    getLivestockById,
    createLivestock,
    updateLivestock,
    deleteLivestock
};