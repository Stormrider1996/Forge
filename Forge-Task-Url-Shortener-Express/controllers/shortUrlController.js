const urlService = require("../services/shortUrlService");
const { validationResult } = require("express-validator");

class ShortUrlController {
  async createUrl(req, res) {
    const { trueUrl, shortUrl } = req.body;
    const email = req.user;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const url = await urlService.createUrl(trueUrl, shortUrl, email);
      return res.json(url);
    } catch (error) {
      if (error.message == "URL already exists") {
        return res.status(409).json({ message: error.message });
      }
      return res.status(500).json({ message: "Something went wrong" });
    }
  }

  async redirectToLongUrl(req, res) {
    const { shortUrl } = req.params;

    try {
      const longUrl = await urlService.getLongUrl(shortUrl);
      await urlService.incrementCounter(shortUrl);
      return res.redirect(longUrl);
    } catch (error) {
      return res.status(404).json({ error: "URL not found" });
    }
  }

  async getUrlsByAuthor(req, res) {
    const email = req.user;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {
      const { urls, totalPages } = await urlService.getUrlsByAuthor(
        email,
        page,
        limit
      );
      res.json({ urls, totalPages, currentPage: page });
    } catch (error) {
      res.status(500).json({ error: "Failed to get URLs" });
    }
  }

  async updateUrl(req, res) {
    const { urlId } = req.params;
    const newData = req.body;
    const url = await urlService.findUrlById(urlId);
    const userId = req.userId;
    if (url.author != userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const updatedUrl = await urlService.updateUrl(urlId, newData);
      return res.json(updatedUrl);
    } catch (error) {
      return res.status(500).json({ error: "Failed to update URL" });
    }
  }

  async deleteUrl(req, res) {
    const { urlId } = req.params;
    const url = await urlService.findUrlById(urlId);
    const userId = req.userId;
    if (url.author != userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    try {
      await urlService.deleteUrl(urlId);
      return res.json({ message: "URL deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete URL" });
    }
  }
}

module.exports = new ShortUrlController();
