const palindromes = function (input) {
    //let arr = Array.from(string);
    let string = '';
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
        if (input[i].length === 1 && input[i].match(/[a-z]/i)) {
            string += input[i];
        }
    }

    let backwards = '';
    for (let i = string.length - 1; i >= 0; i--) {
        backwards += string[i];
    }
    return string === backwards;
};

// Do not edit below this line
module.exports = palindromes;
