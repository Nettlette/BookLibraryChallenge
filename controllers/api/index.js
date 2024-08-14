const router = require("express").Router();
const userRoutes = require("./userRoutes");
const bookRoutes = require("./bookRoutes");
//const commentRoutes = require("./commentRoutes");

// Middleware
router.use("/users", userRoutes);
router.use("/books", bookRoutes);
// router.use("/comments", commentRoutes);

// Exports
module.exports = router;