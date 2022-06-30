// Check the current time
setInterval(function() {
    document.querySelector("#current-time").innerHTML = new Date().toTimeString()
}, 1);

// Load chrome storage
chrome.storage.sync.get((data) => {

    // Check if ip address is stored
    if (data.ipAddres) {
        document.querySelector("#ip-address").innerHTML = data.ipAddress
    }

    // Check ip address with ipify.org
    fetch('https://api.ipify.org')
        .then(response => response.text())
        .then(data => {

            // Save ip address to chrome storage
            chrome.storage.sync.set({
                ipAddress: data
            })

            // Write the ip address to the page
            document.querySelector("#ip-address").innerHTML = data

        })

})