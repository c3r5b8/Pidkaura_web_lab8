
const deposit = document.getElementById('deposit');
const years = document.getElementById('years');
const percent = document.getElementById('percent');

const resultElement = document.getElementById('res');

function newSym() {
    let sum = deposit.value;
    let year = years.value;
    let per = percent.value;
    if (sum === '' || year === '' || per === '') {
        resultElement.innerHTML = 'Після ## років сума становитиме ## $';
        return;
    }
    // let a = per / 100
    // let b = a / 12
    // let c = 1 + b
    // let d = Math.pow(c, year)
    let result = sum * Math.pow((1 + (per / 100) / 12), year * 12);
    resultElement.innerHTML = "Після " + year + " років сума становитиме " + result.toFixed(2) + " $";
}

deposit.addEventListener('input', newSym);
years.addEventListener('input', newSym);
percent.addEventListener('input', newSym);