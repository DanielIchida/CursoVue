function waitFunc(){
    console.log("This will be llogged")
}

var interval = window.setInterval(waitFunc,5000);

window.setTimeout(function () {
    clearInterval(interval)
},32000)
