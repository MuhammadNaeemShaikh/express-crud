"use strict";
let findMaxCha = (str) => {
    let str1 = '';
    let str2 = '';
    for (let index = 0; index < str.length - 1; index++) {
        if (str1.includes(str[index])) {
            str2 = str1;
            str1 = '';
        }
        else {
            str1 += str[index];
        }
    }
    if (str2.length > str1.length) {
        return str2;
    }
    else {
        return str1;
    }
};
console.log(findMaxCha('abcdbef'));
