const fs = require('fs');
const { log } = require('console');

const reducer = (A, B) => {
    let removed = 0;
    Object.keys(A).forEach(key => {
        if (B[key]) {
            if (B[key] !== A[key]) {
                removed = removed + Math.abs(A[key] - B[key]);
                delete A[key];
                delete B[key];
            }
        } else {
            removed = removed + A[key];
            delete A[key];
        }
    });
    return removed;
}

const spliter = (data) => {
    return data.split('').reduce((acc, item) => {
        acc[item] = acc[item] ? acc[item] + 1 : 1;
        return acc;
    }, {});
}

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    const A = spliter(a);
    const B = spliter(b);
    return reducer(A, B) + reducer(B, A);
}

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
    const list = s.split('');
    let counter = 0;
    for (let i = 0; i < list.length - 1; i++) {
        const char = list[i];
        if (char === list[i+1]) {
            counter = counter + 1;
        }
    }
    return counter;
}

// Complete the isValid function below.
function isValid(s) {
    if (s.length === 1) {
        return 'YES';
    }

    const reduced = s.split('').reduce((acc, item) => {
        acc[item] = acc[item] ? acc[item] + 1 : 1;
        return acc;
    }, {});

    const arr = Object.keys(reduced).reduce((acc, item) => {
        const key = reduced[item];
        acc[key] = acc[key] ? acc[key] + 1 : 1;
        return acc;
    }, {});

    const keys = Object.keys(arr);
    if (keys.length < 2) {
        return 'NO';
    }

    if (keys.find(key => +key === 1 && arr[key] === 1)) {
        return 'YES';
    }

    if (!keys.find(key => arr[key] === 1)) {
        return 'NO';
    }

    if (Math.abs(keys[0] - keys[1]) !== 1) {
        return 'NO';
    }

    return 'YES';
}

const checkSpecialPalindrom = (str) => {
    const len = str.length;
    if (len % 2 !== 0) {
        const reduced = str.reduce((acc, item) => {
            acc[item] = acc[item] ? acc[item] + 1 : 1;
            return acc;
        }, {});

        const keys = Object.keys(reduced);
        if (keys.length === 1) return true;
        if (keys.length < 2) return false;

        if (reduced[keys[0]] !== (len - 1) && reduced[keys[1]] !== (len - 1)) return false;

        const idx = (str.length - 1) / 2;
        if (str[0] === str[idx]) return false;

        return true;
    }

    const compress = [...new Set(str)];
    return compress.length === 1;
}

// Complete the substrCount function below.
function substrCount(n, s) {
    const memory = {};
    let counter = s.length;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 2; j < s.length + 1; j++) {
            let word = s.slice(i, j);
            const isValid = memory[word] ? memory[word] : checkSpecialPalindrom(word.split(''));
            if (isValid) {
                memory[word] = true;
                counter = counter + 1;
            }
        }
    }
    return counter;
}


console.log(Math.round(7 / 2));