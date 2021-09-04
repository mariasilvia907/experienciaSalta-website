const request = require('postman-request');

const getAllBlogNotes = (callback) => {
    request('https://experienciasalta-api.herokuapp.com/blognotes', (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
             }
             callback("No se encontraron Notas de Blog", undefined);
         }
     });
}

module.exports= {
     getAllBlogNotes
  }