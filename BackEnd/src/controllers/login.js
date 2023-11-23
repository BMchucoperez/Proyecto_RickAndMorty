const { User } = require("../DB_connection");
const { Op } = require("sequelize");

async function login(req, res) {
  const { usuario, password } = req.query;
  
  try {
    const user = await User.findOne({ where: { usuario } }); // Busca al usuario por el nombre de usuario

    if (!user) {
      return res.json({ access: false }); // Usuario no encontrado
    }

    // Aquí deberías implementar la lógica de comparación de contraseñas segura (por ejemplo, bcrypt)
    // Compara la contraseña ingresada con la contraseña almacenada en la base de datos
    if (user.password === password) {
      return res.json({ access: true }); // Autenticación exitosa
    } else {
      return res.json({ access: false }); // Contraseña incorrecta
    }
  } catch (error) {
    return res.status(500).json({ error: error.message }); // Manejo de errores
  }

}


async function createUser(obj) {
  try {
    const [user, created] = await User.findOrCreate({
      where: { usuario: obj.usuario },
      defaults: {
        password: obj.password,
      },
    });

    return { user, created }; // Retorna tanto el usuario como un indicador de si fue creado o no
  } catch (error) {
    throw error;
  }
}



async function getUsers() {
  try {
    const users = await User.findAll(); // Cambiar findByPk por findAll
    return users;
  } catch (error) {
    throw error; // Mejor lanzar el error en lugar de retornarlo directamente
  }
}


async function updater(obj) {
  try {
    const update = await User.update(obj, { where: { password: "40404040" } });
    return update;
  } catch (error) {
    return error;
  }
}


async function deleter(id) {
  try {
    const user = await User.destroy({ where: { id } });
    return user;
  } catch (error) {
    return error;
  }
}


async function truncateModel() {
  try {
    return await User.truncate();
  } catch (error) {
    return error;
  }
}

async function filter(str) {
  try {
    console.log("entré");
    const filtered = await User.findAll({
      where: {
        email: {
          [Op.like]: str + "%",
        },
      },
    });

    return filtered;
  } catch (error) {
    return error;
  }
}


module.exports = { 
  login,
  createUser,
  getUsers,
  updater,
  deleter,
  truncateModel,
  filter,
};