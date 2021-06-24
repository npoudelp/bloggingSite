const mongoose = require("mongoose");

const homeModel = mongoose.Schema({
    site: {
        type:String,
        default: "noobPoints",
    },
    owner: {
        type:String,
        default: "npoudelp",
    },
    quote: {
        type: String,
        default: "For Quality Content",
    }
})


module.exports = mongoose.model("Home", homeModel);