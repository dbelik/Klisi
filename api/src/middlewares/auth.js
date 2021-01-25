function check(req, res, next) {
    if (req.user) next();
    else res.status(403);
}

module.exports = {
    check
}