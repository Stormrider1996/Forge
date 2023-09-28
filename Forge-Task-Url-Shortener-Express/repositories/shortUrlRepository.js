const Url = require("../models/shortURL");

class UrlRepository {
  async createUrl(urlData) {
    return Url.create(urlData);
  }

  async getUrlByShortUrl(shortUrl) {
    return Url.findOne({ shortUrl });
  }

  async getUrlByAuthor(author, page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    const totalUrls = await Url.countDocuments({ author });
    const totalPages = Math.ceil(totalUrls / limit);

    const urls = await Url.find({ author }).skip(skip).limit(limit).exec();

    return { urls, totalPages };
  }

  async getUrlById(urlId) {
    return Url.findById(urlId);
  }

  async updateUrl(urlId, newData) {
    return Url.findByIdAndUpdate(urlId, newData, { new: true });
  }

  async deleteUrl(urlId) {
    return Url.findByIdAndDelete(urlId);
  }
}

module.exports = new UrlRepository();
