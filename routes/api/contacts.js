const express = require("express");

const ctrl = require("../../controllers/contacts");

const {
  isValidId,
} = require("../../middlewares");

const {
  validateBody,
  validateBodyFavorite,
} = require("../../middlewares/validateBody");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.listContactsCtrl);

router.get("/:contactId", isValidId, ctrl.getContactByIdCtrl);

router.post("/", validateBody(schemas.addSchema), ctrl.addContactCtrl);

router.delete("/:contactId", isValidId, ctrl.removeContactCtrl);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContactCtrl
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBodyFavorite(schemas.updateFavoriteSchema),
  ctrl.updateStatusContactCtrl
);

module.exports = router;
