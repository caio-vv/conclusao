import { Router } from "express"; // importando o express
import authenticator from "../middlewares/authenticator.js"; // importando o authenticator
import { // importando as funções do post-controller
  destroy,
  index,
  show,
  store,
  update,
} from "../controllers/post-controller.js";
const router = Router(); // iniciando o router

// Rotas públicas

router.use(authenticator); // usando o authenticator

// Rotas privadas
router.get("/", index); 
router.get('/:course?', index);
router.get("/:id", show);
router.post("/", store);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;