/*Using the package ‘lodash’ solve below problems(Write all this in route.js in /test-me route
 handler)
-

1.Create an array of strings containing the names all the months of a year and split the array
 into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays*/

const month =[

    "january","february","march","april","may","june","july","august","september","october","november","december"
];
/* Create an array containing the first 10 odd numbers. Using the tail function, return the last
 9 elements of it and print them on console.*/

const Odd = [1,3,5,7,9,11,13,15,17,19];

/*Create 5 arrays of numbers containing a few duplicate values. Using the function union create 
a merged array with only unique values and print them on console*/

const arr = [1,2,3,2,4.5,6,1]

//for shown there are used of lodash _ is define.
const _ = require("lodash")

//Use the function fromPairs to create an object containing key value pairs
const pairs = [ ["horror","The Shining"],
["drama","Titanic"],
["thriller","Shutter Island"],
["fantasy","Pans Labyrinth"]
];


const array = function(){
    //it devides 3 string in a array.
    console.log(_.chunk(month, 3))
    //it gives last 9 number of array.
    console.log(_.tail(Odd))
    //it remove duplicate value in array
    console.log(_.union(arr))
    //it returns key value pairs in array.
    console.log(_.fromPairs(pairs))
    return"Done"

}
module.exports.array=array