const express = require("express");

const { validateBody } = require("../../middlewares/validateBody");
const { authenticate, upload } = require("../../middlewares");

const {
  registerController,
  loginController,
  logoutController,
  getCurrentController,
  updateAvatarController,
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

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatarController);

module.exports = router;
