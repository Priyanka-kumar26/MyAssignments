function launchBrowser(browserName) {
    if (browserName=="chrome") {
        console.log("open chrome browser");
        
        
    } else {
        console.log("open any other browser");
        
        
    }
    
}
launchBrowser("firefox")

function runTests(testType) {
    switch (testType) {
        case "sanity":
            console.log("run sanity test");
            break;
        case "smoke":
            console.log("execute smoke test");
            
            break;
        case "regression":
            console.log("execute regression test");
            break
    
        default:
            console.log("execute any other test");
            

            break;
    }
    
}
runTests("smoke")