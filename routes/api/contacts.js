const express = require("express");

const ctrl = require("../../controllers/contacts");

const { isValidId } = require("../../middlewares");

const {
  validateBody,
  validateBodyFavorite,
} = require("../../middlewares/validateBody");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.listContactsController);

router.get("/:contactId", isValidId, ctrl.getContactByIdController);

router.post("/", validateBody(schemas.addSchema), ctrl.addContactController);

router.delete("/:contactId", isValidId, ctrl.removeContactController);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContactController
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBodyFavorite(schemas.updateFavoriteSchema),
  ctrl.updateStatusContactController
);

module.exports = router;
