let browser= "chrome"
function checkBrowserVersion(callback) {

        setTimeout(function () {

        
        callback(browser);  // Pass the browser value to the callback
 }, 2000);
}

function printBrowserVersion(version) {

    console.log("Browser version using callback: " + version);

}

checkBrowserVersion( printBrowserVersion)