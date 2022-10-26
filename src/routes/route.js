 const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
// const BookController= require("../controllers/bookController")
const BookController2= require("../controllers/booklist_2")

router.get("/test-me", function (req, res) {
router.get("/test-me", function (req, res) {
// router.get("/getBooksData", BookController.getBooksData)

router.post('/createbook', BookController2.create_book_module1)
router.post('/find_books', BookController2.find_book_module1)
router.post('/findbooks_by_year', BookController2.find_bookBY_year1)
router.post('/find_books_user', BookController2.find_bookBY_user)
router.get('/find_books_price', BookController2.find_bookBY_price)
router.post('/find_books_pages', BookController2.find_bookBY_pages)

router.post("/find-books-list", BookController2.find_book_module1)

router.get('/get-books-by-year', BookController2.find_bookBY_year1)

router.get('/getParticularBooks', BookController2.find_bookBY_user)

router.get('/getXINRBooks', BookController2.find_bookBY_price)

router.get('/getRandomBooks', BookController2.find_bookBY_pages)



module.exports = router

module.exports = router;

