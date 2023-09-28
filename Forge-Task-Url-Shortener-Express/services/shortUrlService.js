const urlRepository = require("../repositories/shortUrlRepository");

class UrlService {
  async createUrl(originalUrl, shortUrl, author) {
    const foundShortUrl = await urlRepository.getUrlByShortUrl(shortUrl);
    if (foundShortUrl) {
      throw new Error("URL already exists");
    }
    return urlRepository.createUrl({
      trueUrl: originalUrl,
      shortUrl,
      author,
    });
  }

  async getLongUrl(shortUrl) {
    const url = await urlRepository.getUrlByShortUrl(shortUrl);
    if (!url?.trueUrl) {
      throw new Error("URL not found");
    }
    return url.trueUrl;
  }

  async incrementCounter(shortUrl) {
    const url = await urlRepository.getUrlByShortUrl(shortUrl);
    if (!url) {
      throw new Error("URL not found");
    }
    url.counter++;
    return urlRepository.updateUrl(url._id, url);
  }

  async getUrlsByAuthor(author, page = 1, limit = 10) {
    return urlRepository.getUrlByAuthor(author, page, limit);
  }

  async findUrlById(urlId) {
    return urlRepository.getUrlById(urlId);
  }

  async updateUrl(urlId, newData) {
    const url = await urlRepository.getUrlById(urlId);
    url.shortUrl = newData.shortUrl;

    return urlRepository.updateUrl(url._id, url);
  }

  async deleteUrl(urlId) {
    return urlRepository.deleteUrl(urlId);
  }
}

module.exports = new UrlService();
