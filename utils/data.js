const request = require('postman-request');

const getAllExperiences = (callback) => {
    request('http://localhost:3001/experiences', (error, res, body) => {
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

// const getAllBlogNotes = (callback) => {
//     request('http://localhost:3001/blognotes', (error, res, body) => {
//         if(error){
//           console.log('Error', error)  
//           return callback(error, undefined);
//         }
//         if (res){
//             if(body){
//                return callback(undefined, body);
//             }
//             callback("No se encontraron Notas de Blog", undefined);
//         }
//     });
// }


module.exports= {
   getAllExperiences
}
// module.exports= {
//     getAllBlogNotes
//  }