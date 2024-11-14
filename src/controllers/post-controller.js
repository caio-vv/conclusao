import Post from "../models/post-model.js"; // importando o Post

export const store = async (req, res) => { // função para criar um post
  try {
    const { title, text, course } = req.body;
    const user = req.user._id;

    const content = await Post.create({
      title,
      text,
      course,
      user,
    });

    res.status(201).json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const index = async (req, res) => {
  try {
    // Captura o parâmetro 'course' da URL, por exemplo, /posts/psicologia
    const { course } = req.params;

    // Cria o filtro. Se o 'course' for passado na URL, ele é adicionado ao filtro
    const filter = course ? { course } : {};

    // Consulta os posts com base no filtro
    const content = await Post.find(filter).exec();

    // Retorna os resultados
    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


export const show = async (req, res) => { // função para mostrar um post
  try {
    const content = await Post.findById(req.params.id).exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const update = async (req, res) => { // função para atualizar um post
  try {
    const user = req.user._id;
    const { text } = req.body;

    const content = await Post.findOneAndUpdate(
      {
        _id: req.params.id,
        user,
      },
      { text }
    ).exec();

    if (content) {
      res.json(content);
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const destroy = async (req, res) => { // função para deletar um post
  try {
    const user = req.user._id;

    const content = await Post.findOneAndDelete({
      _id: req.params.id,
      user,
    }).exec();

    if (content) {
      res.json(content);
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};