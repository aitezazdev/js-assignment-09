// TABLE
// var user = prompt("Enter a number : ");
// for(var i = 1; i <= 10; i++){
//     console.log(user * i);
// }

// sum of array elements
// var array = [];
// var sum = 0;
// for (var i = 1; i <= 5; i++) {
//   var arrNumbers = +prompt("Enter a number to put in an array : ");
//   array.push(arrNumbers);
// }
// console.log(array);

// for (var j = 0; j < array.length; j++) {
//     sum += array[j];
//   }
// console.log(sum);

// String Print in reverse
let userString = prompt("Enter a string : ");
let reverse = "";
for(var i = userString.length - 1; i >= 0; i--){
    reverse += userString[i];
}
console.log(reverse);