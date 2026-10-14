async function harry() {

    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Degree")
        }, 2000)
    })

    let bangoloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Degree")
        }, 6000)
    })

    // delhiWeather.then(alert)
    // bangoloreWeather.then(alert)
    console.log("Fetching delhi weather please wait");

    let delhiW = await delhiWeather
    console.log("Fetched delhi weather is" + delhiW);
    console.log("Fetching Bangalore weather please wait");

    let bangaloreW = await bangoloreWeather
    console.log("Fetched Bangalore weather is" + bangaloreW);
    return [delhiW, bangaloreW]
}
const cherry = async () => {
    console.log("Hey i am cherry and I am  waiting");

}


const main1 = async () => {
    console.log("Wecome to weather control room");

    let a = await harry()
    let b = await cherry()

}
main1()



