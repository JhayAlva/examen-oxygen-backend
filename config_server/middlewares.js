var express = require('express');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var bodyParser = require('body-parser');
var routing = require('./config_routing/routingMain');
module.exports = function(servidorExpress){
    servidorExpress.use(cookieParser());
    servidorExpress.use(express.urlencoded({extended:true}));
    servidorExpress.use(express.json({limit:'10mb'}));
    servidorExpress.use(bodyParser.json({limit:'10mb'}));
    servidorExpress.use(cors());
    routing(servidorExpress);
}