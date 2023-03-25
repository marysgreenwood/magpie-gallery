const router = require("express").Router();
const { Users, Art } = require("../../models");
const upload = require("../../utils/upload");
const path = require("path");
const multer = require("multer");
const { MulterError } = require("multer");
const { Op } = require("sequelize");
//const fs = require ('fs');

//route to find all artwork
router.get("/all", async (req, res) => {
  try {
    console.log("hello2");
    const allArt = await Art.findAll();
    res.status(200).json(allArt);
  } catch (err) {
    res.status(400).json(err);
  }
});

//search for art by user, title, type or keyword
router.get("/search/:searchterm", async (req, res) => {
  try {
    console.log("search term", req.params.searchterm);
    const dbSearch = await Art.findAll({
      where: {
        [Op.or]: [
          { artist: { [Op.like]: req.params.searchterm } },
          { title: { [Op.substring]: req.params.searchterm } },
          { type: { [Op.like]: req.params.searchterm } },
          { description: { [Op.substring]: req.params.searchterm } },
        ],
      },
    });

    const searchResults = dbSearch.map((userArtwork) =>
      userArtwork.get({ plain: true })
    );
    console.log("results", searchResults);
    res.status(200).json(searchResults);
    //res.render ("landing", {searchResults});

    //res.render("landing", { searchdata });
  } catch (err) {
    res.status(400).json(err);
  }
});

//post route to add new art
router.post(
  "/upload",
  sessionChecker,
  upload.single("file"),
  async (req, res) => {
    try {
      console.log(req.session);
      const newArt = {};
      newArt.title = req.body.title;
      newArt.description = req.body.description;
      newArt.type = req.body.type;
      newArt.image = req.file.path.split("/").slice(1).join("/");
      newArt.artist = req.session.username;
      newArt.date_added = req.body.date;
      const artUpload = await Art.create(newArt);
      console.log(artUpload);
      // const userArt = artUpload.get({ plain: true });
      // res.render("dashboard", { userArt, logged_in: req.session.logged_in });
      res.redirect("/dashboard");
    } catch (err) {
      if (err instanceof multer.MulterError) {
        res.json(MulterError);
        console.log(MulterError);
        // A Multer error occurred when uploading.
      } else if (err) {
        res.status(400).json(err);
        console.log(err);
      }
    }
  }
);

//put route to update title and description fields
router.put("/:id", async (req, res) => {
  try {
    var updatedArt = await Art.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updatedArt);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete route to remove work
router.delete("/:id", async (req, res) => {
  try {
    const deletedArt = await Art.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedArt);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
