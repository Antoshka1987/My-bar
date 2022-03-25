const express = require('express');
// const axios = require("axios");
const authorization = express.Router();

const bcrypt = require('bcrypt');

const { User, Company } = require('../../db/models');

authorization.get('/', (req, res) => {
  res.render('authorization')
})

authorization.post('/', async (req, res) => {
  const { category, email, password } = req.body;
  if (category === 'bartender') {
    const currBar = await User.findOne({ where: { email }, raw: true });
    if (currBar && (await bcrypt.compare(password, currBar.password))) {
      console.log('<== authorization bartender ==>');
      req.session.userId = await currBar.id;
      req.session.userCountry = await currBar.country_id;
      req.session.userName = await currBar.name;
      req.session.userEmale = await currBar.email;
      req.session.userRol = 'bartender';
      res.sendStatus(200)
    }
  } else if (category === 'company') {
    const currCom = await Company.findOne({ where: { email }, raw: true });
    if (currCom && (await bcrypt.compare(password, currCom.password))) {
      console.log('<== authorization company ==>');
      req.session.userId = await currCom.id;
      req.session.userCountry = await currCom.country_id;
      req.session.userName = await currCom.title;
      req.session.userEmale = await currCom.email;
      req.session.userRol = 'company';
      res.sendStatus(200)
    }
  }
})

module.exports = authorization;
