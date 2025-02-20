const express = require("express")
const router = express.Router()

const userController = require("./../controllers/user.controller")

const routeGuards = require("./../middlewares/route-guard")

router.get("/profile", routeGuards.isLoggedIn, userController.createProfile)




module.exports = router