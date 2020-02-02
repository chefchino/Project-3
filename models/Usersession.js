var mongoose =require("mongoose");

var UserSessionSchema = new mongoose.Schema({
    userId: {
        type: Number,
        default: -1
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

var UserSession = mongoose.model("UserSession", UserSessionSchema);
module.exports = UserSession;