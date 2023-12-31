const authRouter = require("express").Router();
const { auth: ctrl } = require("../../controllers");
const {
  validation,
  ctrlWrapper,
  authorizeUser,
} = require("../../middlewares");
const {
  registrationValidationSchema,
  loginValidationSchema,
} = require("../../models");

authRouter
  .route("/auth/register")
  .post(
    validation(registrationValidationSchema),
    ctrlWrapper(ctrl.authRegister)
  );

authRouter
  .route("/auth/login")
  .post(validation(loginValidationSchema), ctrlWrapper(ctrl.authLogin));

authRouter.route("/auth/logout").post(authorizeUser, ctrlWrapper(ctrl.authLogout));

module.exports = authRouter;
