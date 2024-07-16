const mongoose = require("mongoose");
const NumeroConvertido = require('../models/numeroConvertido');
const numeroConvertido = require("../models/numeroConvertido");
module.exports = {
    AgregarConversion: async (req, res, next) => {
        try {
            let resultado = req.body.resultado;
            if (resultado != undefined) {
                var _session = await mongoose.connection.startSession();
                _session.startTransaction();
                let _idNuevoNumero = new mongoose.Types.ObjectId();
                let _nuevoNumero = new NumeroConvertido(
                    {
                        _id: _idNuevoNumero,
                        numeroConvertido: resultado
                    }
                );

                await _nuevoNumero.save({ session: _session });
                await _session.commitTransaction();
                return res.status(200).json({
                    codigo: 0,
                    numeroAniadido: _nuevoNumero,
                    mensaje: 'Todo ok....'
                });

            }

        } catch (error) {
            console.log('Error: ',error);
            return res.status(500).send({
                codigo: 2,
                mensaje: 'Ha habido un error interno'
            });
        }
    },
    recuperarOperaciones: async (req, res, next) => {
        let todasOperaciones = await NumeroConvertido.find({});
        console.log('Operaciones recuperadas', todasOperaciones);

        return res.status(200).send(todasOperaciones);
    },

    borrarOperacion: async (req, res, next) => {
        let idOperacion = req.body.idOperacion;
        var _session = await mongoose.connection.startSession();
        _session.startTransaction();

        await numeroConvertido.deleteOne({ _id: idOperacion }).session(_session);

        await _session.commitTransaction();
        _session.endSession();

        return res.status(200).send({
            codigo: 0,
            mensaje: 'Se ha eliminado correctamente...'
        });
    },



}