const checkUser = (req, res, next) => {
  if (req.session.userRol !== 'bartender') {
    res.redirect('/authorization');
  } next();
}

const checkCompany = (req, res, next) => {
  if (req.session.userRol !== 'company') {
    res.redirect('/authorization');
  } next();
}

module.exports = {checkUser, checkCompany}
