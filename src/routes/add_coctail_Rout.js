const express = require('express');
const add_coctail = express.Router();

const { Method, Country, Type_of_alcohol, Company, Alcohol } = require('../../db/models')

add_coctail.get('/', async (req, res) => {
  const method = await Method.findAll();
  const country = await Country.findAll();
  const type_of_alcohol = await Type_of_alcohol.findAll();
  const company = await Company.findAll();
  const alcohol = await Alcohol.findAll();
  res.render('add_coctail', { alcohol, method, country, type_of_alcohol, company })
})

add_coctail.post('/', async (req, res) => {
  const { country, company: company_id, type_of_alcohol: type_of_alcohol_id } = req.body;
  const filter = [country, type_of_alcohol_id, company_id];
  // console.log(filter);
  function trueFilter() {
    let result = {};
    for (let i = 0; i < filter.length; i++) {
      if (i === 0 && filter[i] !== '1') {
        result.country = filter[i]
      } else if (i === 1 && filter[i] !== '1') {
        result.type_of_alcohol_id = +filter[i]
      } else if (i === 2 && filter[i] !== '1') {
        result.company_id = +filter[i]
      }
    }
    // console.log('============================================================');
    // console.log(result);
    return result
  }
  const currAlc = await Alcohol.findAll(
    {
      where: trueFilter(),
      raw: true
    }
  );
  // console.log(currAlc);
  res.json(currAlc)
})
module.exports = add_coctail;
