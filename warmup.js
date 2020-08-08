function countingValleys(n, s) {
    const arr = s.split('').map(i => i === 'U' ? 1 : -1);
    const acc = arr.reduce((acc, step, index, orgArr) => {
        acc.current_alt = acc.current_alt + step;
        if (acc.current_alt === 0 && step === 1) {
            acc.valley = acc.valley + 1;
        }
        return acc;
    }, { current_alt: 0, valley: 0 });

    return acc.valley;
}

function jumpingOnClouds(c) {
    const danger = c.reduce((acc, item, index) => item ? [...acc, index] : acc, []);
    const countDanger = danger.length;
    danger.push(c.length);
    const reduced = danger.reduce((acc, item) => {
        acc.total_jump += Math.floor(c.slice(acc.current_danger, item).length / 2);
        acc.current_danger = item + 1;
        return acc
    }, { current_danger: 0, total_jump: 0 });

    return reduced.total_jump + countDanger;
}

function repeatedString(s, n) {
    const baseLetterCount = s.length;
    const maxMulti = Math.floor(n / baseLetterCount);

    const splitedWord = s.split('');
    const firstTotalLetter = splitedWord.reduce((acc, letter) => letter === 'a' ? acc + 1 : acc, 0);
    const firstCount = firstTotalLetter * maxMulti;

    const limitLetterCount = n - (baseLetterCount * maxMulti);
    const limitWord = splitedWord.slice(0, limitLetterCount);
    const secondTotalLetter = limitWord.reduce((acc, letter) => letter === 'a' ? acc + 1 : acc, 0);

    return firstCount + secondTotalLetter;
}


console.log(repeatedString('aba', 10))