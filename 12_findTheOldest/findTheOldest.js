const findTheOldest = function(arr) {
    let ages = [];
    const d = new Date();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].yearOfDeath === undefined) {
            ages[i] = d.getFullYear() - arr[i].yearOfBirth;
        }
        else {ages[i] = arr[i].yearOfDeath - arr[i].yearOfBirth;}
    }
    let index;
    let curOldest = ages[0];
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] >= curOldest) {
            curOldest = ages[i];
            index = i;
        }
    }
    return arr[index];
    /*

    for (let i = 0; i < arr.length; i++) {
        if (!arr.find(person => person.yearOfDeath)) {
            if ((Date() - arr[i].yearOfBirth) > (curOldest.yearOfDeath - curOldest.yearOfBirth)) {
                curOldest = arr[i]
            }
        }
        else if ((arr[i].yearOfDeath - arr[i].yearOfBirth) > (curOldest.yearOfDeath - curOldest.yearOfBirth)) {
            curOldest = arr[i];
        }
    }
    return curOldest;
    */
};

// Do not edit below this line
module.exports = findTheOldest;
