const express = require("express");
const router = express.Router();
const shortUrlController = require("../controllers/shortUrlController");
const verifyJWT = require("../middleware/verifyJWT");
const {
  createUrlValidations,
  updateUrlValidations,
} = require("../validations/urlValidations");

// Create a new shortened URL
router.post(
  "/urls",
  verifyJWT,
  createUrlValidations,
  shortUrlController.createUrl
);

// Get all shortened URLs for the authenticated user
router.get("/urls", verifyJWT, shortUrlController.getUrlsByAuthor);

// Update a shortened URL
router.put(
  "/urls/:urlId",
  verifyJWT,
  updateUrlValidations,
  shortUrlController.updateUrl
);

// Delete a shortened URL
router.delete("/urls/:urlId", verifyJWT, shortUrlController.deleteUrl);

module.exports = router;
