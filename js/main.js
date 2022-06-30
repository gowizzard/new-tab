// Check the current time
setInterval(function() {
    document.querySelector("#current-time").innerHTML = new Date().toTimeString()
}, 1);

// Load chrome storage & check if the ip is already stored
// Then check the ip address with ipify.org, stored the response & write the response to inner html
chrome.storage.sync.get((data) => {

    if (data.ipAddres) {
        document.querySelector("#ip-address").innerHTML = data.ipAddress
    }

    fetch('https://api.ipify.org')
        .then(response => response.text())
        .then(data => {

            chrome.storage.sync.set({
                ipAddress: data
            })

            document.querySelector("#ip-address").innerHTML = data

        })

})