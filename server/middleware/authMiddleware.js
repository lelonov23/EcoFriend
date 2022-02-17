exports.checkAuthForUser = (req, res, next) => {
  console.log('req.session', req.session)
  if (req.session.user.role === '1') next();
  else res.redirect('/');
};
