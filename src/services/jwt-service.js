import jwt from "jsonwebtoken"; // importando o jwt

export const generateToken = (user) => // função para gerar o token
  jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role
    },
    process.env.JWT_PRIVATE_KEY,
    {
      expiresIn: "1h",
    }
  );

export const verifyToken = (token) => // função para verificar o token
  jwt.verify(token, process.env.JWT_PRIVATE_KEY);