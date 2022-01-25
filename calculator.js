class Calculator {
    constructor() {

    }

    sum(a,b){
        return a + b;
    }

    substr(a,b) {
        return a - b;
    }

    multi(a,b) {
        return a * b;
    }

    div(a,b) {
        if(b === 0) {
            return 'error, cannot divide by zero';
        }
        else {
            return a/b;
        }
    }
}

const newCalc = new Calculator();

module.exports = newCalc;