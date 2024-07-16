var routingApi= require('../config_routing/routingApi');
module.exports=function(servidorWeb){
    servidorWeb.use('/api', routingApi);
}