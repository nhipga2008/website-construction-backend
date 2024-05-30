const mongoose = require("mongoose");
const validateMongoDbId = (id) => {
    console.log(id);
    const isValid = mongoose.Types.ObjectId.isValid(id);
    console.log(isValid);
    // if (!isValid) throw new Error("This Id is not valid or not found");
};

module.exports = validateMongoDbId;