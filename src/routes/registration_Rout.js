const express = require('express');
// const axios = require("axios");
const registration = express.Router();

const bcrypt = require('bcrypt');

const { User, Company, Country } = require('../../db/models');


registration.get('/', async (req, res) => {
  const countryAll = await Country.findAll()
  // console.log(countryAll);
  res.render('registration', { countryAll })
})

registration.post('/', async (req, res) => {
  const { category, name, country, email, password: pass } = req.body;
  if (category === 'bartender') {
    const currBar = await User.findOne({ where: { email }, raw: true });
    if (currBar) {
      // console.log('not');
      res.json({ message: 'a user with such an email is already registered in the database' })
    } else {
      try {
      const saltRounds = 10;
      const password = await bcrypt.hash(pass, saltRounds);
      const newUser = await User.create({ name, country_id:Number(country), email, password })
      req.session.userId = await newUser.id;
      req.session.userCountry = await newUser.country_id;
      req.session.userName = await newUser.name;
      req.session.userEmale = await newUser.email;
      req.session.userRol = 'bartender';
      res.sendStatus(200) 
    } catch (e) {
      res.sendStatus(400)
    }
    }
  } else if (category === 'company') {
    const currCom = await Company.findOne({ where: { email }, raw: true });
    if (currCom) {
      console.log('not');
      res.json({ message: 'a user with such an email is already registered in the database' })
    } else {
      const saltRounds = 10;
      const password = await bcrypt.hash(pass, saltRounds);
      const newCompany = await Company.create({ title:name, country_id:Number(country), email, password })
      req.session.userId = await newCompany.id;
      req.session.userCountry = await newCompany.country_id;
      req.session.userName = await newCompany.title;
      req.session.userEmale = await newCompany.email;
      req.session.userRol = 'company';
      res.sendStatus(200)
    }
  }
})

// необходимо засидить базу данных (страны) для последующего вызова их в хбске для выбора при регистрации

module.exports = registration;
