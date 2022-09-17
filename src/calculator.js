function add(...args) {
    return args.reduce((sum, number) => {
        return sum + number;
    }, 0)
}

function subtract(...args) {
    let total = args[0];

    if (args.length === 1) return total * -1;

    for (let i = 1; i < args.length; i++) {
        total -= args[i];
    }

    return total;
}

function divide(...args) {
    let total = args[0];

    if (args.length === 1) return 'Can\'t divide by 0!';

    for (let i = 1; i < args.length; i++) {
        total /= args[i];
    }

    if (total % 1 != 0) return parseFloat(total.toFixed(2));

    return Math.floor(total);
}

function multiply(...args) {
    let total = args[0];

    if (args.length === 1) return 0;

    for (let i = 1; i < args.length; i++) {
        total *= args[i];
    }

    if (total % 1 != 0) return parseFloat(total.toFixed(2));

    return Math.floor(total);
}








const calculator = {
    add,
    subtract,
    divide,
    multiply
};

export default calculator;