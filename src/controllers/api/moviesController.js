const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const moviesController = {
    create: async function (req,res) {
        try{
            let newMovie = await Movies.create({
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            })
        let respuesta = {
            meta: {
                status: 200,
                url: req.originalUrl
            },
            data: newMovie
        }
            res.json(respuesta)
        }
        catch(error){
            let respuesta={
                status:500,
                message:error.errors[0].message
            }
            res.status(500).json(respuesta)
        }

    }
}

module.exports = moviesController;