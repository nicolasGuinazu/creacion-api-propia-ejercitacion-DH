const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': async (req, res) => {
        const genres = await db.Genre.findAll();
        let respuesta = {
                meta: {
                    status: 200,
                    total: genres.length,
                    url: req.originalUrl
                },
                data: genres
        }
        res.json(respuesta)

    },
    'detail': async (req, res) => {
        const genresDetail = await db.Genre.findByPk(req.params.id);
        let respuesta
        if (!genresDetail) {
            respuesta = {
                meta: {
                    url: req.originalUrl
                },
                message:'Id inexistente'
            }
            res.status(400).json(respuesta)
        } else {
            respuesta = {
                meta: {
                    status: 200,
                    url: req.originalUrl
                },
                data: genresDetail
            }
            res.json(respuesta)
        }



    }

}

module.exports = genresController;