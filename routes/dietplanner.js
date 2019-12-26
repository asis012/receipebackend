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
  //   const { calorie } = req.body;
  //break down of the diet
  //   let protein = 0.3 * calorie;
  //   let fruits = 0.2 * calorie;
  //   let carbs = 0.2 * calorie;
  //   let diary = 0.1 * calorie;
  //   let veggies = 0.2 * calorie;

  //   let breakfastCalorie = calorie / 3;

  //   let lunchCalorie = calorie / 3;
  //   let dinnerCalorie = calorie / 3;

  connection.query(`select * from breakfast`, (err, rows) => {
    if (err) throw err;

    // function checkCalorie(item) {
    //   return item.calories >= 100 && item.calories < 105;
    // }
    // const data = rows.filter(checkCalorie);
    let datas = [10, 20, 5, 4, 8, 9, 100];
    function twoValues(arr, k) {
      arr.sort((a, b) => {
        return a - b;
});
      res.send(arr);
      let lowIndex = 0;
      let highIndex = arr.length - 1;
      let temp;

      while (lowIndex < highIndex) {
        temp = arr[lowIndex] + arr[highIndex];

        if (temp === k) {
          return [arr[lowIndex], arr[highIndex]];
        } else if (temp < k) {
          lowIndex++;
        } else {
          highIndex--;
        }
      }
    }
    let result = twoValues(datas, 30);
    console.log(result);
  });
});

module.exports = Router;
