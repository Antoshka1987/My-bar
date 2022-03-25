const express = require('express');

const { Alcohol, Type_of_alcohol, Company, Country } = require('../../db/models')

const edit_CompPost = express.Router();

edit_CompPost.put('/:id', async (req, res) => {
  const alcoholId = req.params.id;
  const { type_of_alcohol_id, strength, info } = req.body;
  const updatedAlcohol = await Alcohol.update({ type_of_alcohol_id, strength, info },
    {
      where: {
        id: +alcoholId
      }
    });

  const trueAlcohol = await Alcohol.findOne({
    where: { id: +alcoholId },
    include:
      [Type_of_alcohol,
        {
          model: Company,
          include: [Country]
        }
      ],
    raw: true
  })
  // console.log(trueAlcohol);

  res.json(trueAlcohol)
});

module.exports = edit_CompPost;
