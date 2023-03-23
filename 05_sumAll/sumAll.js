const sumAll = function(num1, num2) {

    let sum = 0;
    let result = 0;


    

    if( (typeof (num1,num2) !== 'number') || num1 < 0 || num2 < 0){
        return "ERROR"
    }

    if (num1 > num2) {
        num1 = num1 + num2;
        num2 = num1 - num2;
        num1 = num1 - num2;
    }
    
    for (let i = num1; i <= num2; i++){
    
        sum += i;
        result = sum;

    }

    return result;




};

// Do not edit below this line
module.exports = sumAll;
