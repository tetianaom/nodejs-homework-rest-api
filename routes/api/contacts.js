const express = require("express");

const ctrl = require("../../controllers/contacts");

const { isValidId, authenticate } = require("../../middlewares");

const {
  validateBody,
  validateBodyFavorite,
} = require("../../middlewares/validateBody");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", authenticate, ctrl.listContactsController);

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  ctrl.getContactByIdController
);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.addContactController
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  ctrl.removeContactController
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContactController
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBodyFavorite(schemas.updateFavoriteSchema),
  ctrl.updateStatusContactController
);

module.exports = router;
