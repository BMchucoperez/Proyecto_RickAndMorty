const { 
    login,
    createUser,
    getUsers,
    updater,
    deleter,
    truncateModel,
    filter,
} = require("../controllers/login");

const userRouter = require("express").Router();

userRouter.get("/login", login);

userRouter.post("/create", async (req, res) => {
  const { usuario, password } = req.body;

  // Verifica si usuario y password están presentes en req.body
  if (usuario && password) {
    try {
      // Código para crear un usuario en la base de datos
      const creation = await createUser({ usuario, password });

      return res.json({ msg: "Created", data: creation });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    // Si usuario o password faltan en req.body, envía un error 400
    return res.status(400).json({ error: "Missing fields" });
  }
});
  
userRouter.get("/get", async (req, res) => {
  try {
    const usuarios = await getUsers();
    return res.json(usuarios);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
  
userRouter.put("/update", async (req, res) => {
  const { obj } = req.body;
  
  try {
    const update = await updater(obj);
    return res.json(update);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
  
userRouter.delete("/delete", async (req, res) => {
  const { id } = req.query;
  try {
    const userDeleted = await deleter(id);
    return res.json(userDeleted);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
  
userRouter.delete("/truncate", async (req, res) => {
  try {
    const result = await truncateModel();
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


module.exports = userRouter;