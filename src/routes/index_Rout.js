const express = require('express');
// const axios = require("axios");
const indexRout = express.Router();

const { Alcohol, Country, Company, Type_of_alcohol } = require('../../db/models')

indexRout.get('/', async (req, res) => {
  const alcohol = await Alcohol.findAll(
    {
      include:
        [Type_of_alcohol,
          {
            model: Company,
            include: [Country]
          }
        ]
    }
  );
  // console.log(alcohol[0]);
  const country = await Country.findByPk();
  const type = await Type_of_alcohol.findAll();
  res.render('home-page', { alcohol, country, type })
})

indexRout.get('/logout', (req, res) => {
  // удаляем сессию с сервера (или базы данных если сессия хранится там).
  req.session.destroy();
  // Говорим клиенту что бы он удалил куку.
  res.clearCookie('sid');
  res.redirect('/');
});


module.exports = indexRout;






// indexRout.get('/', async (req, res) => {
//   try {
//     const obj = await axios('www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
//     // console.log(obj.data);
//     res.json(obj.data)
//   } catch (error) {
//     console.log(error.message);
//   }
//   // res.json(obj)
//   // res.render('home-page')
// })
