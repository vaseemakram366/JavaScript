// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Resolved after 2 seconds");
//         resolve(56)
        
//     },2000)
// })

// p1.then((value)=>{
//     console.log(value);
//     let p2 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{resolve("Promise 2")}, 2000)
//     })
//     return p2
    
// }).then((value)=>{
//     console.log("We are done");
//     return 2
// }).then((value)=>{
//     console.log("now we are pakka done");
    
// })

const loadScript = (src) =>{
    return new Promise((resolve, reject) => {
    script = document.createElement("script")
    script.type = "text/javascript"
    script.src = src
    document.body.appendChild(script)
    script.onload = ()=>{
        resolve("script has been loaded sir")

    }
        script.onerror = ()=>{reject(0)}

})
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.min.js")
p1.then((value)=>{
    console.log(value);
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.min.js")
    
}).then((value) => {
    console.log("Second script ready");

}).catch((error)=>{
    console.log("We are sorry but we are having prolems loading the script");
    
})