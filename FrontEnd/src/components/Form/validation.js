const validation = (userData) => {

    let errors = {};

    if(!userData.usuario){
        errors.usuario = "Este campo no puede estar vacío";
    }
    if(!userData.password){
        errors.password = "Este campo no puede estar vacío";
    }

    return errors;
}

export default validation;