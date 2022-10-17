const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
});
// problem no 1 ,return movies array
router.get('/movies', function (req , res){
    console.log("This is a movie array :" ,req.params)
    let movies = ["Raja babu ", "coolie no 1", "Bawarchi", "Khiladi"]
    res.send(movies)
});
//problem no 2 & 3 return index no. of movies array , index is greater than array sent array;
router.get('/movies/:indexNumber',(req,res)=>{
    let index = req.params.indexNumber
    let returnn = ''
    let movies = ["Raja babu ", "coolie no 1", "Bawarchi", "Khiladi"];
    returnn = (movies.length > index) ? movies[index] : "Error : something wet wrong.";
    res.send(returnn)
});
//  GET/films no.4, Instead of an array of strings define an array of movie objects this time. Each 
//movie object should have values - id, name. An example of movies array is,
//Return the entire array in this api’s response 

router.get('/films' , function (req , res){
    let films = [ {
        'id': 1,
        'name': 'The Shining' }, 
        {
        'id': 2,
        'name': 'Incendies'
       }, 
       {
        'id': 3,
        'name': 'Rang de Basanti'
       },
        {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       res.send(films)
       
});




module.exports = router;







// Example 1 for path params
// router.get('/students/:studentName', function(req, res){
//     // ':' denotes that the following part of route is a variable
//     // The value of this variable is what we are sending in the request url after /students
//     // This value is set in the form of an object inside req.params
//     // The object contain key value pairs
//     // key is the variable in the route
//     // value is whatever dynamic value sent in the request url
//     let myParams = req.params

//     // params attribute is fixed in a request object
//     // params contains the path parameters object
//     console.log("The path params in the request are : ", myParams)
//     res.send('The full name is ' + myParams.studentName )
// })

// // Example 2 for path params
// router.get('/student-details/:name', function(req, res){
//     let requestParams = req.params
//     console.log("This is the request ", requestParams)
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
//     res.send('Dummy response')
// })

