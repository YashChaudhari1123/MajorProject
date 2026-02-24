const Listing = require("../models/listing.js");
const { listingSchema, reviewSchema } = require("../schema.js");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });

};

module.exports.renderNewForm = (req, res) => {
    // res.send("working");
    console.log(req.user);

    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    // res.send("working");

    let { id } = req.params;
    let listings = await Listing.findById(id).populate({
        path: "review",
        populate: {
            path: "author",
        },
    },).populate("owner");
    if (!listings) {
        req.flash("error", "Listing you requested for does not exist");
        return res.redirect("/listings");
    }
    // console.log(data);
    console.log(listings);
    res.render("listings/show.ejs", { listings });
};

module.exports.createListing = async (req, res, next) => {
    //   let { title, description, image, price, location, country} = req.body;
    // we can do this above way but it is too ling to write too many variables
    // thats why  we have treated this vairbles as key in new.ejs

    let result = listingSchema.validate(req.body);
    // console.log(result);
    if (result.error) {
        throw new ExpressError(400, result.error);
    }

    let url = req.file.path;
    let filename = req.file.filename;
    // console.log(url, "..", filename);
    let listing = req.body.listing;
    // console.log(listing);

    // one way to submit
    // await Listing.insertOne(listing);

    // another way
    const newListing = new Listing(listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings");

    /*
    new Listing().save() was preferred as it enforces Mongoose validation, 
    applies schema defaults, and supports middleware, 
    unlike insertOne() which directly writes to the database without these safeguards.
    */

};

module.exports.renderEditForm = async (req, res) => {
    // res.send("working");
    let { id } = req.params;
    const listing = await Listing.findById(id)
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist");
        return res.redirect("/listings");
    }
    console.log("Listing image:", listing.image);
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_250,w_300");

    // console.log(listing);
    res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
    // res.send("working");
    let { id } = req.params;
    // let listing = await Listing.findById(id);
    // console.log(listing);

    // one way to update
    // const listing = req.body.listing;
    // // console.log(listing);

    // await Listing.findByIdAndUpdate(id, {
    //     title: listing.title,
    //     description: listing.description,
    //     image: listing.image,
    //     price: listing.price,
    //     location: listing.location,
    //     country: listing.country
    // });




    // another way to update
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;

        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", " Listing Updated");
    res.redirect(`/listings/${id}`);

};

module.exports.destroyListing = async (req, res) => {
    // res.send("working");
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted");
    res.redirect("/listings");
};