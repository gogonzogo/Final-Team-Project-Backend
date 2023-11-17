const userRouter = require("express").Router();
const { user: ctrl } = require("../../controllers");
const {
  ctrlWrapper,
  authorizeUser,
} = require("../../middlewares");

userRouter.route("/user/dailyRate/").post(ctrlWrapper(ctrl.userGetDailyRateAndFood));

userRouter
  .route("/user/stats/")
  .get(authorizeUser, ctrlWrapper(ctrl.userGetCalculator));

userRouter.route("/user/calculator/").post(authorizeUser, ctrlWrapper(ctrl.userSaveCalculator));

userRouter.route("/user/info/day").get(authorizeUser, ctrlWrapper(ctrl.userGetInfo))

userRouter.route("/user/archive/").post(authorizeUser, ctrlWrapper(ctrl.userArchive));

userRouter.route("/user/getarchive/").get(authorizeUser, ctrlWrapper(ctrl.userGetArchive));

userRouter.route("/user/deleteDiary/").post(authorizeUser, ctrlWrapper(ctrl.userDeleteDiary));

userRouter.route("/user/deleteAccount/").post(authorizeUser, ctrlWrapper(ctrl.userDeleteAccount));

userRouter.route("/user/getarchiveDate/").post(authorizeUser, ctrlWrapper(ctrl.userGetarchiveDate));

userRouter.route("/user/restoreArchive/").post(authorizeUser, ctrlWrapper(ctrl.userRestoreAchive));

userRouter.route("/user/graph/").post(authorizeUser, ctrlWrapper(ctrl.userGraph));


module.exports = userRouter;
