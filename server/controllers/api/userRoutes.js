const router = require("express").Router();
const { Users, Art } = require("../../models");
const sessionChecker = require("../../utils/help");

//for route testing purposes only
router.get("/all", async (req, res) => {
  try {
    var userList = await Users.findAll();
    res.status(200).json(userList);
  } catch (err) {
    res.status(400).json(err);
  }
});
//route for user signup
router.post("/newUser", async (req, res) => {
  try {
    const newUser = req.body;
    console.log("newUser", newUser);
    // create the newUser with the hashed password and save to DB
    const userData = await Users.create(newUser);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
    console.log("NOOOOOOO", err);
  }
});

//login route
router.post("/login", async (req, res) => {
  try {
    const userData = await Users.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;
      console.log(req.session);
    });
    res.status(200).send("IT WORKED!");
  } catch (err) {
    res.status(400).json(err);
  }
});

// route for user logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    console.log(req.session.user_id);
    req.session.destroy(() => {
      res.status(204).end();
      console.log("logout successful");
    });
  } else {
    res.status(404).end();
  }
});

// Route for user editing profile
router.post("/edit-profile", async (req, res) => {
  console.log("profile update", req.body);
  try {
    const userUpdate = await Users.update(req.body, {
      where: {
        id: req.session.user_id,
      },
      individualHooks: true,
    });
    console.log("profile updated");
    //req.flash("success", "Profile updated successfully");
    res.redirect("/dashboard");
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

//delete route to remove user
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await Users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
