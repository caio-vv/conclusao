import express from "express"; //importando o express
import "dotenv/config.js"; // importando o dotenv
import "./config/db.js"; // importando o db
import user_router from "./routes/user-router.js"; // importando o user_router
import post_router from "./routes/post-router.js" //  importando o post_router

const app = express(); // iniciando o express

app.get("/", (req, res) => { // criando uma rota
  res.send("servidor rodando") // enviando uma resposta
           })

app.use(express.json()); // usando o express.json
app.use("/user", user_router); // usando o user_router
app.use("/post", post_router); // usando o post_router

app.listen(process.env.API_PORT, () => console.log("Server running")); // iniciando o servidor