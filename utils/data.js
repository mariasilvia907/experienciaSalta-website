const request = require('postman-request');

const getAllExperiences = (callback) => {
    request('https://experienciasalta-api.herokuapp.com/experiences', (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
            }
            callback("No se encontraron Experiencias", undefined);
        }
    });
}

module.exports= {
   getAllExperiences
}