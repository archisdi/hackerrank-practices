function hourglassSum(arr) {
    const maxIndex = 5;
    const hourGlassArr = [];
    for (let x = 0; x < arr.length; x++) {
        if (maxIndex - x >= 2) {
            for (let y = 0; y < arr[x].length; y++) {
                if (maxIndex - y >= 2) {
                    hourGlassArr.push(arr[x][y] + arr[x][y+1] + arr[x][y+2] + arr[x+1][y+1] + arr[x+2][y] + arr[x+2][y+1] + arr[x+2][y+2])
                }
            }
        }
    }

    return hourGlassArr.reduce((acc, val) => {
        if (acc === null) return val;
        return acc > val ? acc : val
    }, null);
}

function rotLeft(a, d) {
    const arr = a;
    const arrLength = a.length;
    if (arrLength === d) return arr;

    return [
        ...arr.slice(d, arrLength),
        ...arr.slice(0, d)
    ];
}

/** advanced bubble sort */
function minimumBribes(q) {
    const arr = q;
    const arrLength = q.length;
    const counter = {};

    let moveCount = 0;
    let swapped = false;

    for (let i = 0; i < arrLength; i++) {
        swapped = false;
        for (let j = 0; j < arrLength - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                counter[arr[j]] = counter[arr[j]] ? counter[arr[j]] + 1 : 1;
                if (counter[arr[j]] > 2) {
                    console.log('Too chaotic');
                    return;
                }
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                moveCount = moveCount + 1;

                swapped = true;
            }
        }

        if (!swapped) break;
    }
    console.log(moveCount);
}

/** not complete */
function minimumSwaps(arr) {
    let moveCount = 0;
    let swapped = false;

    for (let i = 0; i < arr.length; i++) {
        swapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                moveCount = moveCount + 1;

                swapped = true;
            }
        }

        if (!swapped) break;
    }
    
    return moveCount;
}

// Complete the freqQuery function below.
function freqQuery(queries) {
    const dict = {};
    const result = [];

    queries.forEach(([query, value]) => {
        switch (query) {
            case 1:
                dict[value] = dict[value] ? dict[value] + 1 : 1;
                break;
            case 2:
                if (dict[value]) dict[value] = dict[value] - 1;
                break;
            case 3:
                const isExist = Object.keys(dict).indexOf(key => dict[key] === value);
                result.push(isExist ? 1 : 0);
                break;
            default:
                break;
        }
    });

    return result;
}


/** */
(() => {
    const input = [ 
        [ 1, 5 ],
        [ 1, 6 ],
        [ 3, 2 ],
        [ 1, 10 ],
        [ 1, 10 ],
        [ 1, 6 ],
        [ 2, 5 ],
        [ 3, 2 ] 
    ];

    console.log(freqQuery(input))
})()