import { verifyToken } from "../services/jwt-service.js"; // importando o verifyToken
import User from "../models/user-model.js"; // importando o User

export default async (req, res, next) => { // função para autenticar
  try { 
    const token = req.headers.authorization.split(" ")[1]; // pegando o token
    const user = verifyToken(token); // verificando o token

    if (user) { 
      req.user = await User.findById(user._id).exec(); // pegando o usuário
      console.log(req.user) 
      next();
    } else {
      throw new Error(); // se não tiver usuário retorna um erro
    }

  } catch (error) {
    res.sendStatus(401);
  }
};