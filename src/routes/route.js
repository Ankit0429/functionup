const express = require('express');
const router = express.Router();///test-you

// welcome function file problem no.1
const wel = require('../logger/logger.js')
//batch info and current date ,month,Year no.2
const Time = require('../util/helper')
//trim,toLowerCase,upperCase no.3
const college = require('../validator/formatter')
// chunck,tail,union
const newfun = require('../lodash/lodash.js')



router.get('/test-me', function (req, res) {
    //calling function
    //console.log(wel.welcome())
    //console.log(Time.info())
    //console.log(college.myfunc())
    console.log(newfun.array())
    res.send('My first ever api!')

    
});

module.exports = router;

