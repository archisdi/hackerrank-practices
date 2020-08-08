// Complete the checkMagazine function below. (12 Minutes)
function checkMagazine(magazine, note) {
    const dict = magazine.split(' ').reduce((acc, word) => {
        acc[word] = acc[word] ? acc[word] + 1 : 1;
        return acc;
    }, {})

    const canReplicate = note.split(' ').reduce((acc, word) => {
        if (!dict[word]) {
            acc = false;
            return;
        } else {
            dict[word] = dict[word] - 1;
        }
        return acc;
    }, true);

    console.log(canReplicate ? 'Yes' : 'No');
}

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    const [str, tmp] = s1.length < s2.length ? [s1, s2] : [s2, s1];
    let isContainSubstring = false;
    const dict = {}

    for (let i = 0; i < str.length; i++) {
        const word = str[i];
        if (!dict[word] && tmp.indexOf(word) !== -1) {
            isContainSubstring = true;
            break;
        }
        dict[word] = true;
    }

    return isContainSubstring ? 'YES' : 'NO';
}

function combination(n) {
    let acc = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            acc = acc + 1;   
        }
    }
    return acc;
}

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    const hasDuplicates = new Set(s.split('')).size !== s.length;
    if (!hasDuplicates) {
        return 0;
    }

    const dict = {};
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            let word = s.slice(i, j);
            word = word.split('').sort().join('');
            dict[word] = dict[word] ? dict[word] + 1 : 1;
        }
    }

    return Object.keys(dict).reduce((acc, key) => {
        const word = dict[key];
        if (key.length === 1 || word >= 2) {
            acc = acc + combination(word);
        }
        return acc;
    }, 0);
}
