//brake animation



function brakeChain() {
    let chain = document.getElementById('chain');
    chain.innerHTML = "&#xf0c1;";

    setTimeout(function () {
        chain.innerHTML = "&#xf127;";

    }, 1000);
}
// call animation
brakeChain();

//animate every 2 sec

setInterval(brakeChain, 2000);


//battery charge animation

function chargeBattery() {
    let batttery = document.getElementById('battery');
    battery.innerHTML = "&#xf244;";

    setTimeout(function () {
        battery.innerHTML = "&#xf243;";
    }, 1000);
}
setTimeout(function () {
    battery.innerHTML = "&#xf242;";
}, 2000);

setTimeout(function () {
    battery.innerHTML = "&#xf241;";

}, 3000);
setTimeout(function () {
    battery.innerHTML = "&#xf240;";

}, 4000);
chargeBattery();

//run animation evvery 5sec
setInterval(chargeBattery, 5000);