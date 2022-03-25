const express = require('express');

const add_instance = express.Router();

const { Type_of_alcohol, Alcohol } = require('../../db/models');

add_instance.get('/', async (req, res) => {
  console.log('<==========================>');
  type_of_alcohol = await Type_of_alcohol.findAll();
  res.render('add_instance', { type_of_alcohol })
})

add_instance.post('/', async (req, res) => {
  const { type_of_alcohol_id, name, strength, info } = req.body;
  const currAlc = await Alcohol.findOne({ where: { name }, raw: true });
  if (currAlc) {
    console.log('not');
  } else {
    const company_id = req.session.userId;
    const country = req.session.userCountry
    const newAlc = await Alcohol.create({ type_of_alcohol_id:Number(type_of_alcohol_id), name, strength, info, company_id:Number(company_id), country:Number(country)})
      res.sendStatus(200)
  }
})


module.exports = add_instance;

  // console.log(`<=====${type_of_alcohol_id}=====>`);
  // console.log(`<=====${name}=====>`);
  // console.log(`<=====${strength}=====>`);
  // console.log(`<=====${info}=====>`);
  // console.log(`<=====${req.session.userCountry}=====>`);
  // console.log(`<=====${req.session.userId}=====>`);
