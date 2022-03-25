const express = require('express');

const { Alcohol } = require('../../db/models')

const deleteCompPost = express.Router();

deleteCompPost.delete('/:id', async (req, res) => {
  // console.log(req.params); // { id: '1' }
  const postId = req.params.id;
  // console.log(req.params.id); // '1'
  await Alcohol.destroy({ where: { id: +postId } });
  res.sendStatus(200);
});

module.exports = deleteCompPost;
