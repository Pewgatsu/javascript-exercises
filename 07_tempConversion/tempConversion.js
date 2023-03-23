const convertToCelsius = function(temperature) {

  /*
    multiply by 5/9 -32

  */

  let result = 0;


  result = (temperature - 32) * 5/9;


  return parseFloat(result.toFixed(1));


};

const convertToFahrenheit = function(temperature) {

  let result = 0;


  /*
     multiply by 9/5 + 32
  */

   result = (temperature * 9/5) + 32;


   return parseFloat(result.toFixed(1));
  

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
