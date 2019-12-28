const Router = require('express').Router();
const connection = require('../db_config');

Router.post('/generate', (req, res) => {
  //age in years , height in cm , weight in kg , activityLevel in (noExercise,lightExercise,moderateExercise,heavyExercise)
  const { age, height, weight, gender, activityLevel } = req.body;
  let BMR, caloriesNeeded;
  switch (gender) {
    case 'male':
      BMR = 66.473 + 13.7516 * weight + 5.0033 * height - 6.755 * age;
      break;
    case 'female':
      BMR = 655.0955 + 9.5634 * weight + 1.8496 * height - 4.6756 * age;
  }

  switch (activityLevel) {
    case 'noExercise':
      caloriesNeeded = BMR * 1.2;
      break;
    case 'lightExercise':
      caloriesNeeded = BRM * 1.375;
      break;
    case 'moderateExercise':
      caloriesNeeded = BMR * 1.55;
      break;
    case 'heavyExercise':
      caloriesNeeded = BMR * 1.725;
      break;
  }
  res.json({ BMR, caloriesNeeded });
});

Router.post('/make', (req, res) => {
  // const { calories, allergy, disease } = req.body;
  let data = [];
  let finaldata = [];
  let SQL_QUERY = `
  select * from ingredients inner join (select r.receipe_name,r.receipe_type,r.receipe_steps,i.ingredient_id from receipe r inner join receipe_ingredients i on r.id = i.receipe_id
    ) as result on ingredients.id = result.ingredient_id;
  `;
  connection.query(SQL_QUERY, (err, rows) => {
    if (err) throw err;
    connection.query('select * from receipe', (err, receipes) => {
      receipes.forEach(receipe => {
        data.push(
          rows.filter(row => {
            return row.receipe_name === receipe.receipe_name;
          })
        );
      });
      data.forEach(d => {
        console.log(d);
      });
    });
  });
});

module.exports = Router;
