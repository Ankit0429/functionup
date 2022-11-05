const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?
router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
    res.send("Ending the cycle")
}  )

router.post("/createUser", commonMW.myMiddleware, UserController.createUser)

router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)

router.post('/CreateProduct',controller.createProductApi)
router.get('/getProduct',controller.getProductApi)

router.post('/createUser1',middleware.userMiddleware,controller.createUserApi)
router.get('getUser1',controller.getUserApi)

router.post('/createOrder',middleware.userMiddleware,controller.createOrderApi)
router.get('getOrder1',controller.getOrderApi)

module.exports = router;