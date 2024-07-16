const mongoose = require('mongoose');

const numeroConvertidoSchema = new mongoose.Schema(
    {
        numeroConvertido:{type:String,require:true}
    },{
        versionKey:false
    }
);

module.exports = mongoose.model('numeroConvertido',numeroConvertidoSchema,'numeroConvertidos');