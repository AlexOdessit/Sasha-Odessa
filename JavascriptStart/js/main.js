// let carYear=2008;
// let personYear= 2011;

// function calculateAge(year){
//   let currentYear=2020;
//   let result = currentYear - year;

//   return result;

// }



// function checkYear(year){
//   if (calculateAge(year)<10){
//     console.log ('Возраст меньше 10лет');
// }
//     else{
//         console.log ('Возраст больше 10 лет');
//     }
// }
//     checkYear(carYear);
//     checkYear(personYear);



// Массивы методы

// let arr =['Apple','Orange','Pineapple'];

// let len = arr.length;

// console .log(len);

// arr.push ('Melon');

// console .log(arr);

// arr.pop ();
// console.log(arr);

// arr .unshift ('Watermelon');

// arr.shift();
// console.log(arr);


// let index= arr.indexOf('Orange');

// console .log(index);


// let removed = arr.splice(1,2);
// console .log(arr);
// console.log(removed);
// console.log(arr.includes('Appl'));

// let n = 45;
// let str = n.toString();
// console.log(str);
// str= Number(str);
// console.log(n);

// str = Math. ceil(str);
// let str = 'Apple,Orange,Pineapple';
// str = str.split('');
// console.log(str);


// function Number(a){
//  a = a.toString();

//  let arr= a.split('');
//  let summ= 0;
//  console.log(arr);
//  for(let i=0;i< arr.lenght;i++){
//    summ += parseInt(arr[i]);
//  }
//  return summ;
// }

// Number(374628);






function MyArray(a) {
  let arr1 = [];
  for (let i = 0; i < a.length; i++) {
      if (a[i] % 2 == 0) {
          if (typeof (a[i]) === 'number') {
              arr1.push(a[i]);
          }
      }
  }
  return arr1;
}
//let b = MyArray([4, 7, 20, 15, 17, 22]);
console.log(MyArray([4, 7, 20, 15, 17, 22]));




