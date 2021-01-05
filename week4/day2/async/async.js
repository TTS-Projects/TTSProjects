const fetch = require("node-fetch");

/*
//getRandomNumber with promise in .5 seconds
let myPromise = new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)

    setTimeout(function () { myResolve(); }, 500); // when successful
    myReject();  // when error
});

myPromise.then(function () {
    return (Math.random());
})
*/

async function invokePromise() {
    let awaitedNumber = myPromise();
    console.log(awaitedNumber);
    return (awaitedNumber);

}


//trial number 2
async function invokeMe() {
    let getRandomNumber = new Promise(function (myResolve, myReject) {
        setTimeout(function () { myResolve(Math.random()); }, 500);
    });

    console.log(await getRandomNumber);
}

invokeMe();


//Fetch Remote data using async/await
async function oneParam(cityName) {
    let response = await fetch('https://geocode.xyz/' + cityName + 'seattle?json=1n');
    let jsonText = await response.json();
    console.log(response);
    console.log(jsonText);



}
oneParam("seattle");