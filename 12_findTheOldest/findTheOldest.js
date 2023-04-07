const findTheOldest = function(people) {

    // if no death date -> living

    let currentDate = new Date().getFullYear();

    return people.reduce( (oldest, person) => {
       
        if(!('yearOfDeath' in oldest ) ) {
            return ( person.yearOfDeath - person.yearOfBirth) > (currentDate - oldest.yearOfBirth) ? person : oldest
        }else if( !('yearOfDeath' in person ) ) {
            return ( currentDate - person.yearOfBirth) > (oldest.yearOfBirth - oldest.yearOfBirth) ? person : oldest
        }else {
            return (person.yearOfDeath - person.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth) ? person : oldest
        }
       
    })

    
};

// Do not edit below this line
module.exports = findTheOldest;
9