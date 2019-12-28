const Router = require('express').Router();
const connection = require('../db_config');

Router.post('/add', (req, res) => {
  const {
    receipe_name,
    receipe_ingredients,
    receipe_manual,
    receipe_suitable_for
  } = req.body;
  const addReceipe = `INSERT INTO receipe(receipe_name,receipe_ingredients,receipe_manual,receipe_suitable_for)
          VALUES('${receipe_name}','${JSON.stringify(
    receipe_ingredients
  )}','${JSON.stringify(receipe_manual)}','${JSON.stringify(
    receipe_suitable_for
  )}')
      `;

  connection.query(addReceipe, (err, rows) => {
    if (!err) {
      res.json({ message: 'receipe added' });
    }
  });
});

//get all receipes in database
Router.get('/all', (req, res) => {
  const getAllReceipes = `SELECT * FROM receipe`;
  connection.query(getAllReceipes, (err, rows) => {
    if (!err) {
      d;
      res.json(rows);
    }
  });
});

//get receipe according to health conditions
Router.post('/healthfilter', (req, res) => {
  const { healthConditions } = req.body;
  let finalReceipe = [];
  let conditions = Object.values(healthConditions);
  console.log(conditions);
  const healthFilter = `SELECT * FROM receipe`;
  connection.query(healthFilter, (err, rows) => {
    if (!err) {
      rows.forEach(row => {
        let suitable_for = Object.values(JSON.parse(row.receipe_suitable_for));
        if (suitable_for.includes(...conditions)) {
          finalReceipe.push(row);
        }
      });
      res.json(finalReceipe);
    }
  });
});
//delete a receipe
Router.delete('/delete', (req, res) => {
  const { id } = req.body;
  const deleteReceipe = `DELETE FROM receipe WHERE id=${id}`;
  connection.query(deleteReceipe, (err, rows) => {
    if (!err) {
      res.json(`Receipe ${id} deleted successfully`);
    }
  });
});

module.exports = Router;
