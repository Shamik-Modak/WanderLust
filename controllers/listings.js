const Listing = require("../models/listing");
const mapTilerClient = require("@maptiler/client");

mapTilerClient.config.apiKey=process.env.MAP_KEY;

module.exports.index = async (req, res) => {
  
  const { category } = req.query;
  let filter = {};

  if (category) {
    filter.category = category;
  }

  const allListings = await Listing.find(filter);
  
  res.render("listings/index.ejs", { allListings,category });
};

module.exports.show = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist");
    return res.redirect("/login");
  }
  res.render("listings/show.ejs", { listing });
};


module.exports.create = async (req, res, next) => {
  // in an async function, or as a 'thenable':
  try{
  const locationQuery=req.body.listing.location;

  const response=await mapTilerClient.geocoding.forward(locationQuery,{
    limit:1,
  });

    console.log("raw response from maptiler:",response);

    if(!response?.features?.length){
        console.log("No features found in response");
        req.flash("error","Location not found.Please try again");
        return res.redirect("/listings/new")
    }

    let listingData=req.body.listing;
    if(!listingData.category){
      listingData.category=[];
    }
    else if(typeof listingData.category=== "string" ){
      listingData.category=[listingData.category];
    }

    
  // let {title,description,image,price,country,location}=req.body;
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  newListing.geometry=response.features[0].geometry;
  let savedList=await newListing.save();
  console.log(savedList);
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
}
catch(err){
    console.error("MAPTILER API ERROR", err);
    req.flash("error","Error processing location.Please check your API KEY")
    return res.redirect("/listings/new")
}
};

module.exports.edit = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist");
    return res.redirect("/listings");
  }
  let orgImgUrl = listing.image.url;
  orgImgUrl = orgImgUrl.replace("/upload", "/upload/h_200,w_300");
  res.render("listings/edit.ejs", { listing, orgImgUrl });
};

module.exports.update = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.delete = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
