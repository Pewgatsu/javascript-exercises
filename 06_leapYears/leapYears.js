const leapYears = function(year) {

    /*

    Leap years -> divisible by 4,
    Not Leap years -> divisible by 100 unless they are divisible by 400

    
    check if year is divisible by 400
    if yes, then it is a leap year
    if not, check if it is divisible by 100,
    if yes, then it is not a leap year,

    1600 -> divisble 4, 400, 100

    */

    if ( year % 4 === 0) {

        if ( year % 400 === 0 && year % 100 === 0 ) {
            return true;
        }

        if ( !year % 400 === 0 && year % 100 === 0) {
            return false;
        }

        return true;
        
    }else {
        return false;
    }





    


};

// Do not edit below this line
module.exports = leapYears;
