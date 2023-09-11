const express = require("express");

const { validateBody } = require("../../middlewares/validateBody");
const { authenticate, upload } = require("../../middlewares");

const {
  registerController,
  loginController,
  logoutController,
  getCurrentController,
  updateAvatarController,
  verifyEmailController,
  resendVerifyEmailController,
} = require("../../controllers/users");

const schemas = require("../../schemas/users");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  registerController
);

router.get("/verify/:verificationToken", verifyEmailController);

router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  resendVerifyEmailController
);

router.post("/login", validateBody(schemas.loginSchema), loginController);

router.get("/current", authenticate, getCurrentController);

router.post("/logout", authenticate, logoutController);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  updateAvatarController
);

module.exports = router;
