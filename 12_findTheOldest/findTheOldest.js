const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    
    const oldestPerson = people.reduce((oldest, person) => {
        const age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;

        if(!oldest || age > oldest.age) {
            return {age, person};
        } else {
            return oldest;
        }
    }, null);
    return oldestPerson.person;
};

// Do not edit below this line
module.exports = findTheOldest;
