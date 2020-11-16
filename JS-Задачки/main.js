// 1.Сумма цифр из числа 
function myDigitsSum(num) {

    let sum = 0;
    while (num != 0) {

        sum += num % 10;

        num = Math.floor(num / 10);

    }
    return sum;

}

let result = myDigitsSum(3567);

console.log("Задание 1.Сумма цифр из числа:" + result);


// 2.Среднее арифметическое массива чисел

function AverageSum(arr2) {
    let total = 0;
    for (i = 0; i < arr2.length; i++) {
        total += arr2[i];
    }
    return total / arr2.length;

}

let avg = AverageSum([25, 30, 40, 50, 60, 80]);
console.log('Задание 2.Cреднее арифметическое:' + avg);



// 3.Cумма парных - сумма непарных чисел
function getNumDiffer(arr) {
    let even = [];
    let odd = [];
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum1 += even.push(arr[i]);
        } else {
            sum2 += odd.push(arr[i]);
        }
    }
    return sum1 - sum2;
}


let differ = getNumDiffer([17, 23, 35, 16, 15, 32, 10, 9, 14, 42]);
console.log(differ);
