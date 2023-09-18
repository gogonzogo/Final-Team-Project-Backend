const userGetInfoRouter = require("express").Router();
const { user: ctrl } = require("../../controllers");
const {
  validation,
  ctrlWrapper,
  authorizeUser,
  upload,
} = require("../../middlewares");

userGetInfoRouter.route("/users/calculator").post(authorizeUser, ctrlWrapper(ctrl.userGetInfo));
module.exports = userGetInfoRouter;