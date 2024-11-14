export default (roles = []) => // função para autorizar
    (req, res, next) => {
      if (roles.includes(req.user.role)) { // verificando se o usuário tem permissão
        next();
      } else {
        res.sendStatus(403); // se não tiver permissão, retorna 403
      }
    };