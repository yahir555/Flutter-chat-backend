const { Schema, model} = require('mongoose');

const UsuarioSchema = Schema({

    nombre: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true
    },

    online: {
        type: Boolean,
        default: false
    },
});

UsuarioSchema.method('toJSON', function(){
    const { __v, _id, password, ...Object } = this.toObject();
    Object.uid = _id; 
    return Object;
})



module.exports = model('Usuarios', UsuarioSchema);