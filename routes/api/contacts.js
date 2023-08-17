const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.listContactsCtrl);

router.get("/:contactId", ctrl.getContactByIdCtrl);

router.post("/", validateBody(schemas.addSchema), ctrl.addContactCtrl);

router.delete("/:contactId", ctrl.removeContactCtrl);

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  ctrl.updateContactCtrl
);

module.exports = router;
