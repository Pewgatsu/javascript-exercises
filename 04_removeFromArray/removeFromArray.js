const removeFromArray = function(inputArray, ...numToRemove) {

    const result = new Array;

    inputArray.forEach(element => {

       if (!numToRemove.includes(element)){
            result.push(element);
       }
        
    });

   

    return result;
    
    
};

// Do not edit below this line
module.exports = removeFromArray;
