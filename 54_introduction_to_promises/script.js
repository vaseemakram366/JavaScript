let promise = new Promise(function(resolve, reject){
    alert("Hello")
    resolve(56)
})

console.log("hello one");
setTimeout(function(){
    console.log("Hello two in 2 seconds");
    
}, 2000)
console.log("My name is " + "Ronaldo Three");

console.log(promise);

// Fetch google.com homepage ==> console.log("google.com home page done")
// Fetch data from the data api
// Fetch pictures form the server
// Print downloading
// Rest of the script