module.exports.adminAuth = (req, res, next) => {
    if(req.body.role === "admin"){
        console.log("Admin Authenticated");
        next();
    } else {
        res.status(403);
        res.send("Only admins are able to show all / update / add Users");
    }
}