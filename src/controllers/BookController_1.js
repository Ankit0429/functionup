const book_module=require('../models/book_list_model')
const { find } = require('../models/userModel')
// const { find } = require('../models/userModel')


// **************************************************  1111   
const create_book=async function(req , res){
    const books_body=req.body
    await book_module.create(books_body)
    res.send({msg:"your book submit successfully"})
}
module.exports.create_book_module1=create_book

// ***************************************************** 222222
const find_data= async function(req,res){
    const books_list_find = await book_module.find().select({book_name:1,auther_name:1,_id:0})
   res.send({msg:books_list_find})
    /*const books_list_find = await book_module.find().select({book_name:1,auther_name:1,_id:0})
   res.send({msg:books_list_find ,status:true})*/
    console.log('find-succesfully')
}

const by_year=async function(req,res){
module.exports.find_book_module1=find_data

// *****************************************************  3333333
const by_years=async function(req,res){
    const user_year=req.query.year
    console.log(user_year)
    const book_list_by_year=await book_module.find({year:user_year})
    res.send(book_list_by_year)
    if(book_list_by_year) res.send(book_list_by_year)
}

module.exports.find_bookBY_year1=by_years

const by_input_user=async function(req,res){
// ***************************************************************************  444444
const particular_book=async function(req,res){
    const user_input=req.query.input
    // const user_year=req.query.year
    const book_list_by_input=await book_module.find({stock_avaiable:user_input})
    const user_input_auther=req.query.input_auther
    console.log(user_input,user_input_auther)
    /*const book_list_by_input=await book_module.find({book_name:user_input ,auther_name:user_input_auther})
    console.log(book_list_by_input)*/
    res.send(book_list_by_input)

}

const by_price=async function(req,res){
    const book_list_by_price=await book_module.find({$or:[{price:{indian:{$gt:"100",$lt:"2000"}}}]})
    // const book_list_price=await book_module.find({price:{Europe:{$gt:"5$"}}})
    res.send(book_list_by_price)
    // res.send(book_list_price)
    // console.log(book_list_price)
}

const by_pages=async function(req,res){
    // const take_input=req.query.input1
    const stock=req.query.input
    const find_pages = await book_module.find({stock_avaiable:stock,total_page:{$gt:500}})
    res.send(find_pages)
    console.log(find_pages)
}
module.exports.find_bookBY_user=particular_book

// *********************************************88  55555555555555

const get_by_price=async function(req,res){
    const book_list_price=await book_module.find({$or:[{"price.indian":{$gt:100,$lt:2000}}]})
    res.send(book_list_price)
    console.log(book_list_price)
}

module.exports.find_bookBY_price=get_by_price

// *******************************************************  6666666
const by_pages=async function(req,res){
    const find_book_pages = await book_module.find({stock_avaiable:true,total_page:{$gt:500}})
    res.send(find_book_pages)
    console.log(find_book_pages)
}


module.exports.create_book_module1=create_book
module.exports.find_book_module1=find_data
module.exports.find_bookBY_year1=by_year
module.exports.find_bookBY_user=by_input_user
module.exports.find_bookBY_price=by_price
module.exports.find_bookBY_pages=by_pages
