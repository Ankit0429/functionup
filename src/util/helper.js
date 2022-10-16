/*Module 2 : src/util/helper.js

- printDate() : prints the current date
- printMonth() : prints the current month
- getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example
 - Radon, W3D3, the topic for today is Nodejs module system’
	
	Call all these functions in route.js inside the test-me route handler */

const getinfo = {
    name: "lithium",
    week:"w3d5",
    topic:"Nodejs",
};

function getbatchinfo(){
    console.log(`Batch name ${getinfo.name}, current date ${getinfo.week}, Topic ${getinfo.topic}`);

    const CurrentDate = new Date();
    const month =CurrentDate.getMonth()+1;
    

    console.log(CurrentDate);
    console.log(month);
    return "Done"
};

module.exports.info=getbatchinfo;