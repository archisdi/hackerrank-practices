function countSwaps(a) {
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j+1]) {
                const temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                count = count + 1;
            }
        }
    }
    
    console.log(`Array is sorted in ${count} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);
}

function maximumToys(prices, k) {
    const reduced = prices.sort((a, b) => a - b).reduce((acc, price) => {
        if (price <= acc.budget) {
            return {
                total_item: acc.total_item + 1,
                budget: acc.budget - price
            }
        }
        return acc;
    }, { total_item: 0, budget: k });

    return reduced.total_item;
}

/** not completed */
const calcMedian = (arr) => {
    const len = arr.length;
    const arrSort = arr.sort();
    const mid = Math.ceil(len / 2);
    return len % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];
}

// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
    let notif = 0;
    for (let i = d; i < expenditure.length; i++) {
        const current = expenditure[i];
        const trailing = expenditure.slice(i-d, i);
        const median = calcMedian(trailing);
        if (current >= (median * 2)) {
            notif = notif + 1;
        }
    }
    return notif;
}


console.log(activityNotifications([ 2, 3, 4, 2, 3, 6, 8, 4, 5 ], 5));