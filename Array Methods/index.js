// Array Methods
// let num = [1, 2, 3, 34, 4]
// let b = num.toString()// b is now a string
// console.log(b, typeof b);
// let c = num.join("and")
// console.log(c, typeof c);
// let r = num.pop()// pop returns the popped element
// console.log(num, r);

// let r = num.push(56)// push returns the new array length
// console.log(num, r);
// let r = num.shift()
// console.log(r, num);// Removes an element from the start of the array
// let r = num.unshift(78)// add element in the beginning 
// console.log(r, num);


// // delete operator

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(num.length);

// delete num[0]
// console.log(num.length);


// concat- used to join arrays to the given array

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19] 
// let num_even_more = [21, 22, 23, 44, 45, 46, 47, 48, 49] 

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray);
// console.log(num, num_more); 

// Sort method

// let compare = (a,b)=>{
//     return b-a

// }
// num = [551, 22, 3, 14, 5, 6, 7, 8, 299]
// num.sort(compare)
// num.reverse()
// console.log(num);

// Splice and slice

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let deletedValues = num.splice(2, 3, 1021, 1022, 1023)
// console.log(num);
// console.log(typeof deletedValues);

let newNum = num.slice(3,5)
console.log(newNum);
