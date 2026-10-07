// Synchronus programming
// let a = prompt("What is your name?");
// let b = prompt("What is your age?")
// let c = prompt("What is your favorite color?")
// console.log(a+" is " + b + " years old and has " + c + " favorite color.");


// Asynchronus programming
// console.log("start");

// setTimeout(function(){
//     console.log(("Hey i am good"));
    
// },3000)
// console.log("end");


// Callbacks
function loadScript(src, callback) {
    var script = document.createElement("script")
    script.src = src;
    script.onload = function() {
        console.log("Loaded script with src: " + src);
        callback(null, src);
        
    }
        script.onerror = function() {
            console.log("Error loading with SRC: " + src);
            callback(new Error("Src got some error"))
            
        }
    document.body.appendChild(script)
}

function hello(error, src) {
    if(error){
        console.log(error);
        return
        
    }
    alert('Hello World' + src);
}

function goodMorning(error, src) {
    if(error){
        console.log(error);
        return
        
    }
    alert('goodMorning' + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", goodMorning)