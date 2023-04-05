const add = function(x, y) {

  return x + y;
	
};

const subtract = function(x, y) {
  
  return x - y;
	
};

const sum = function(array) {

  let result = 0;

  for (let i = 0; i < array.length; i++){
    result += array[i];
  }

  return result;
	

};

const multiply = function(array) {

  let result = 1;

  for (let i = 0; i < array.length; i++){
    result *= array[i];
  }

  return result;

};

const power = function(x,y) {

  let result = 1;

  for (let i = 0 ; i < y; i++){
    result *= x;
  }

  return result;
  

    
};

const factorial = function( n ) {

  // Iterative 
  // let result = 1;

  // for (let i = n; i > 0 ; i--){
  //   result *= i;
  // }

  // return result;


  // Recursive 

  if (n <= 1){
    return 1;
  }

  return n * factorial (n-1);








	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
