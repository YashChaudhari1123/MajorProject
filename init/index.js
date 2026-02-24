const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch(err => console.log(err));

const initDB = async () => {
    await Listing.deleteMany({});  // delete existing data before initialise 
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "6997ff4c5bfee8da7c08e0cb" }));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();

