const addToLocals = (req, res, next) => {
  res.locals.userId = req.session?.userId;
  res.locals.userEmale = req.session?.userEmale;
  res.locals.isCompany = req.session?.userRol  ==  "company";
  res.locals.isBarman = req.session?.userRol == "bartender";
  res.locals.userCountry = req.session?.userCountry;
  res.locals.userName = req.session?.userName;
  next();
};

module.exports = { addToLocals };
