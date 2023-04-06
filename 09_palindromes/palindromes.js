const palindromes = function (word) {

    
    word = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    let start = 0;
    let end = word.length - 1;

    while (start < end ){
        
        if (word[start] !== word[end]){
            return false;
        }

        start++;
        end--;
    }

    return true;

    


};

// Do not edit below this line
module.exports = palindromes;
