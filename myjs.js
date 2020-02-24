let count = 0;
let primeNumber = "";

function run() {
    let inputNumber = parseInt(prompt("Enter a number: "));
    primeNumberShow(inputNumber);
    count = 0;
    primeNumber = "";
}
function primeNumberShow(inputNumber) {
    for (let i = 0; i < 1000; i++){
        if (primeNumberCheck(i) === true) {
            primeNumber += i + " ";
            count += 1;
        }
        if (count === inputNumber) {
            break;
        }
    }
    document.getElementById("prime").innerHTML = primeNumber;
}

function primeNumberCheck(number) {
    let temp = true;
    if ((number === 1) || (number === 2)) {
        return true;
    } else if (number > 2) {
        for (let i = 2; i < number; i++) {
            if ((number % i) === 0) {
                temp = false;
            }
        }
            if (temp === true) {
                return true;
            } else {
                return false;
            }
    }
}


