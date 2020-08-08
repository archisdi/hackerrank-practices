// Complete the whatFlavors function below.
function whatFlavors(cost, money) {
    const hm = cost.reduce((acc, price, id) => {
        acc[price] = id + 1;
        return acc;
    }, {});

    for (let i = 0; i < cost.length; i++) {
        const id = i+1;
        const price = money - cost[i];
        if (hm[price] && hm[price] != id) {
            console.log(`${id} ${hm[price]}`);
            break;
        }
    }
}

// Complete the minTime function below. (Factory)
function minTime(machines, goal) {
    const hm = machines.reduce((acc, rate, id) => {
        acc[rate] = acc[acc[rate]] ? acc[rate] + 1 : 1;
        return acc;
    }, {});
    const keys = Object.keys(hm);

    let days = +keys[0];
    let items = 0;
    while (items < goal) {
        keys.forEach(key => {
            if (days % +key === 0){
                const rate = hm[key];
                items = items + rate;
            }
        });
        days = days + 1;
    }
    return days - 1;
}

const machines = `477 448 240 858 927 703 172 68 969 943 657 499 753 777 438 199 356 435 63 292 446 164 323 511 145 607 39 832 764 692 990 240 491 581 98 769 635 621 189 603 915 197 453 667 973 890 865 328 676 928`

console.log(minTime(machines.split(' '), 306));

