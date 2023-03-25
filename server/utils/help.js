// middleware function to check for logged-in users
sessionChecker = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
      } else {
        next();
      }
    };    

module.exports= sessionChecker