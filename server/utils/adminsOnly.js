module.exports = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    const err = new Error('NOT AN ADMIN')
    err.status = 401
    next(err)
  }
}
