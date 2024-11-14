import mongoose from "mongoose"; // importando o mongoose

(async () => { // função assíncrona para conectar com o banco
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected with DB");
  } catch (error) {
    console.log(error);
  }
})();