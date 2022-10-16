/*Module1 : src/logger/logger.js containing the following exported function

- welcome() -> prints ‘Welcome to my application. I am <name> and a part of FunctionUp 
lithium cohort.’ on console

Call welcome in route.js inside the test-me handler*/

function welcome(){
    console.log( " welcome to my application, I am Ankit Giri From lithium batch")
    return "Done"
}

module.exports.welcome= welcome