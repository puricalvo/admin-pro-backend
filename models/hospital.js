const { Schema, model } = require('mongoose');


const HospitalSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
}, { collection: 'hospitales' }); // para poner el nombre que quieres en la base de datos mongoodb.

HospitalSchema.method('toJSON', function() {
   const { __v, ...object } = this.toObject();
   return object;

})

module.exports = model( 'Hospital', HospitalSchema );
