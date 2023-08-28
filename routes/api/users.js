const express = require("express");

const { validateBody } = require("../../middlewares/validateBody");
const { authenticate } = require("../../middlewares");

const {
  registerController,
  loginController,
  logoutController,
  getCurrentController,
} = require("../../controllers/users");

const schemas = require("../../schemas/users");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  registerController
);

router.post("/login", validateBody(schemas.loginSchema), loginController);

router.get("/current", authenticate, getCurrentController);

router.post("/logout", authenticate, logoutController);

module.exports = router;
