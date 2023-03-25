const router = require("express").Router();
const path = require("path");
const sessionChecker = require("../utils/help");
const { Users, Art } = require("../models");

// Loads homepage
router.get("/", async (req, res) => {
  res.render("landing", { logged_in: req.session.logged_in });
});

// load user signup page
router.get("/signup", (req, res) => {
  res.render("signup");
});

//load login page
router.get("/login", (req, res) => {
  res.render("login", { logged_in: req.session.logged_in });
});

//load search results
router.get("/search", (req, res) => {
  res.render("search", { searchbyUser }, { logged_in: req.session.logged_in });
});

//load dashboard
router.get("/dashboard", sessionChecker, async (req, res) => {
  try {
    const dbUserArt = await Art.findAll({
      where: {
        artist: req.session.username,
      },
    });
    const userArt = dbUserArt.map((userArtwork) =>
      userArtwork.get({ plain: true })
    );
    

    res.render("dashboard", { userArt, logged_in: req.session.logged_in,  }, );
    //success: req.flash("success")
    //console.log('handlebars', success)
    //res.status(200).json(searchByUser)
    
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

//load upload page
router.get("/upload", sessionChecker, (req, res) => {
  res.render("upload", { logged_in: req.session.logged_in });
});

//edit-profile page
router.get("/edit-profile", sessionChecker, (req, res) => {
  res.render("edit-profile", { logged_in: req.session.logged_in });
});

// route for handling 404 requests(unavailable routes)
router.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

module.exports = router;
