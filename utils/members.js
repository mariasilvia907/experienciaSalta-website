const request = require('postman-request');

const getAllMembers = (callback) => {
    request('https://experienciasalta-api.herokuapp.com/members', (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
            }
            callback("No se encontraron Miembros del Equipo", undefined);
        }
    });
}

module.exports= {
    getAllMembers
}