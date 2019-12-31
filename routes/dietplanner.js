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
   const {allergy} = req.body;
   SQL_QUERY = `select * from receipe,ingredients,receipe_ingredients WHERE receipe.id=receipe_ingredients.receipe_id and 
   ingredients.id = receipe_ingredients.ingredient_id
   `;
   connection.query(SQL_QUERY,(err,receipes)=>{
     if(err) throw err;
     const item = ['momoboi','oatmeal'];
     let response = [];
     let finalresponse = [];
      item.forEach((i)=>{

        let ingredients = [];
        let single_item = receipes.filter((receipe)=>{
          if(receipe.receipe_name === i ){
            return 1;
          }
        })
      //retreving all ingredients of a particular receipe
      single_item.forEach((data)=>{
        ingredients.push(data.ingredient_name);
      })
      //making a object with all receipes information 
      response.push({
        "receipe_name":i,
        "receipe_ingredients":ingredients,
        "receipe_steps":single_item[0].receipe_steps,
        "receipe_type":single_item[0].receipe_type
        
      })
      });
      //filtering receipes if it contains the ingredients to which user is allergetic
     finalresponse = response.filter((r)=>{
      if(r.receipe_ingredients.some((i)=>{ return allergy.includes(i)})){
        
      }
      else
      {
        return 1;
      }
     })
     res.json({finalresponse});
     
   })

  });

module.exports = Router;


// let datas = [{
//   type:"breakfast",
//   receipe_name:"oatmeal",
//   receipe_ingredients:["oat","meal"],
//   receipe_steps:["boil milk","add oat in it","keep it warm for 5 minutes","add sugar"],
//   receipe_calorie:"600 kcal"
// }]