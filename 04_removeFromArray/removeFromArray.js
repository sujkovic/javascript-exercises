const removeFromArray = function(array, ...argss) {
    let args = Array.from(argss);

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (array.at(i) === args.at(j)) {
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
