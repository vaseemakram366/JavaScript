// let arr = [45, 23, 21]

// Array map method
// let a = arr.map((value, index, array)=>{
//     // console.log(value, index, array);
//     return value + index
// })
// console.log(a, arr);

// Array filter method
// let arr2 = [45, 23, 21, 0, 3, 5]
// let a2 = arr2.filter((a)=>{
//     return a<10
// })
// console.log(a2, arr2);


// Array reduce method
// let arr3 = [1, 2, 3, 5, 2, 1]
// const reduce_func = (h1, h2)=>{
//     return h1 + h2
// }

// let newarr3 = arr3.reduce(reduce_func)
// console.log(newarr3);

// Chapter 5 practice set
// problem  1
// let arr = [1,2,3,4,5,6,7,83]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr);

// problem 2
// let arr = [1, 2, 3, 4, 5, 6, 7, 83]
// let a;
// do {
//     a = prompt("Enter a number")
//     a = Number.parseInt(a)
//     arr.push(a)
//     console.log(arr);
// } while (a != 0);
// console.log(arr);

// problem 3
// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
// let n = arr.filter((x)=>{
//     return x%10 == 0

// })
// console.log(n);

// problem 4
// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
// let n = arr.map((x)=>{
//     return x*x == 0

// })
// console.log(n);


// problem 5
let arr = [1, 2, 3]
let n = arr.reduce((x1, x2)=>{
    return x1*x2 == 0

})
console.log(n);