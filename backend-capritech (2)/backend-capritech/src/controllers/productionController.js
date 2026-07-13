const {productionCreate} = require('../services/productionService');
const Response = require("../functions/response");

const getAllProduction = (req, res) => {
    const body = req.body;
    console.log("body recibido: ", body);
    res.status(201);
    res.json({mensaje: "Obteniendo todas las producciones"});
}

const getProductionById = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Obteniendo la producción con ID: ${id}`});
}

const createProduction = async(req, res) => {
    const {
        fecha,
        descripcion,
        unidadMedida,
        cantidad,
        valorUnitario,
        valorTotal,
        fechaVencimiento,
        nombreTraslada,
        nombreRecibe,
        nombreInstructor,
        observaciones
    } = req.body;

    var errores = [];

    if(
        !fecha ||
        !descripcion ||
        !unidadMedida ||
        !cantidad ||
        !valorUnitario ||
        !valorTotal ||
        !fechaVencimiento ||
        !nombreTraslada ||
        !nombreRecibe ||
        !nombreInstructor ||
        !observaciones
    ){
        errores.push({mensaje: "Todos los campos son obligatorios"});
    }

    if(fecha == ""){
        errores.push({mensaje: "El campo fecha no puede estar vacio"});
    }

    if(descripcion == ""){
        errores.push({mensaje: "El campo descripcion no puede estar vacio"});
    }

    if(unidadMedida == ""){
        errores.push({mensaje: "El campo unidadMedida no puede estar vacio"});
    }

    if(cantidad == ""){
        errores.push({mensaje: "El campo cantidad no puede estar vacio"});
    }

    if(valorUnitario == ""){
        errores.push({mensaje: "El campo valorUnitario no puede estar vacio"});
    }

    if(valorTotal == ""){
        errores.push({mensaje: "El campo valorTotal no puede estar vacio"});
    }

    if(fechaVencimiento == ""){
        errores.push({mensaje: "El campo fechaVencimiento no puede estar vacio"});
    }

    if(nombreTraslada == ""){
        errores.push({mensaje: "El campo nombreTraslada no puede estar vacio"});
    }

    if(nombreRecibe == ""){
        errores.push({mensaje: "El campo nombreRecibe no puede estar vacio"});
    }

    if(nombreInstructor == ""){
        errores.push({mensaje: "El campo nombreInstructor no puede estar vacio"});
    }

    if(observaciones == ""){
        errores.push({mensaje: "El campo observaciones no puede estar vacio"});
    }

    if(errores.length > 0){
        var response = new Response("Error en la creación de la producción", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }

    data = {
        fecha,
        descripcion,
        unidadMedida,
        cantidad,
        valorUnitario,
        valorTotal,
        fechaVencimiento,
        nombreTraslada,
        nombreRecibe,
        nombreInstructor,
        observaciones
    };

    const production = await productionCreate(data);

    var response = new Response(
        true,
        "Producción creada exitosamente",
        production
    );

    res.status(201);
    res.json(response.json);
}

const updateProduction = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Actualizando la producción con ID: ${id}`});
}

const deleteProduction = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Eliminando la producción con ID: ${id}`});
}

module.exports = {
    getAllProduction,
    getProductionById,
    createProduction,
    updateProduction,
    deleteProduction
};