const { Diary, Calculator, User } = require("../../models");


const userDeleteAccount = async (req) => {
        try {
                const userId = req.user._id;
                await Diary.deleteMany({ userId });
                await Calculator.findOneAndDelete({ userId });
                await User.findOneAndDelete({ _id: userId });
                return 200

        } catch (err) {
                console.log(err);
                throw new Error("Error deleting account" + err.message);
        }
};
module.exports = userDeleteAccount;