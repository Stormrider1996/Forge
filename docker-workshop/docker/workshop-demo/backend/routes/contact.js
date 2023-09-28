import Route from "felony/dist/base/Route.js";
import Recaptcha from "../middleware/Recaptcha.js";
import Validation from "../middleware/Validation.js";
import SendGridService from "../services/SendGrid.js";

/**
 * @api {POST} /contact
 * @apiName contact
 * @apiGroup MyGroup
 * @class
 */
export default class contact extends Route {
  /**
   * HTTP method used for this route
   *
   * @type string
   */
  method = "POST";

  /**
   * HTTP path path after the hostname for this route
   *
   * @type string
   */
  path = "/contact";

  /**
   * Description of this route that will be used while loading to describe this route
   *
   * @type string
   */
  description = "";

  /**
   * Array containing all the middleware that will be launched before request
   * enters this route.
   *
   * Types allowed for this define:
   * @type string[] | string | Middleware[] | Middleware
   * Type string[]
   *  - Here you can define files with their full import path, they will have to each export default class that extends Middleware class
   *
   * Type string
   *  - There is no need for array if you only have one path to middleware
   *
   * Type Middleware[]
   *  - You can preload multiple middleware classes in your route and then push them into this array
   *
   * Type Middleware
   *  - You can assign a single middleware class to this key
   */
  middleware = [
    new Recaptcha(),
    new Validation(Felony.config.contact.validation),
  ];

  /**
   * Handler for this route that will return some response.
   *
   * @param {any} request
   * @param {any} response
   * @return {Promise<void|object|string>}
   */
  async handle(request, response) {
    try {
      const payload = {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        hearAboutUs: request.body.hearAboutUs,
        contactedBy: request.body.contactedBy,
        company: request.body.company,
        companyAddress: request.body.companyAddress,
        country: request.body.country,
        city: request.body.city,
        zipCode: request.body.zipCode,
        registrationId: request.body.registrationId,
        vatId: request.body.vatId,
        companyEmail: request.body.companyEmail,
        phoneNumber: request.body.phoneNumber,

        auditNature: request.body.auditNature,
        reasonForJoining: request.body.reasonForJoining,
        dataCenterLayers: request.body.dataCenterLayers,

        idea: request.body.idea,
        businessGoalsMessage: request.body.businessGoalsMessage,

        locationType: request.body.locationType,

        dataCenterCountry: request.body.dataCenterCountry,
        dataCenterCity: request.body.dataCenterCity,
        dataCenterZip: request.body.dataCenterZip,
        dataCenterAddress: request.body.dataCenterAddress,
        longitude: request.body.longitude,
        latitude: request.body.latitude,

        sustainableEnergySource: request.body.sustainableEnergySource,
        electricalCapacity: request.body.electricalCapacity,
        listingType: request.body.listingType,
        locationOffer: request.body.locationOffer,

        energySource: request.body.energySource,

        privateEquity: request.body.privateEquity,
        investmentValue: request.body.investmentValue,

        miningHardware: request?.body?.miningHardware?.map(item => item.label),
        miningQuantity: request?.body?.miningHardware?.map(item => item.quantity),
        message: request.body.message,
      }

      let text = `
Senders name: ${payload.firstName} ${payload.lastName} <br />
Senders email: ${payload.email} <br />
Heard about us: ${payload.hearAboutUs} <br />
Contacted by: ${payload.contactedBy} <br />`
      if (payload.company) {
        text += `<br />Company: ${payload.company}`
      }
      if (payload.companyAddress) {
        text += `<br />Company address: ${payload.companyAddress}`
      }
      if (payload.country) {
        text += `<br />Country: ${payload.country}`
      }
      if (payload.city) {
        text += `<br />City: ${payload.city}`
      }
      if (payload.zipCode) {
        text += `<br />ZIP code: ${payload.zipCode}`
      }
      if (payload.registrationId) {
        text += `<br />Registration ID: ${payload.registrationId}`
      }
      if (payload.vatId) {
        text += `<br />VAT ID: ${payload.vatId}`
      }
      if (payload.companyEmail) {
        text += `<br />Company email: ${payload.companyEmail}`
      }
      if (payload.phoneNumber) {
        text += `<br />Phone number: ${payload.phoneNumber}`
      }
      if (payload.auditNature) {
        text += `<br />Audit nature: ${payload.auditNature}`
      }
      if (payload.reasonForJoining) {
        text += `<br />Reason for joining: ${payload.reasonForJoining}`
      }
      if (payload.dataCenterLayers) {
        text += `<br />Data center layers: ${payload.dataCenterLayers}`
      }
      if (payload.locationType) {
        text += `<br />Location Type: ${payload.locationType}`
      }
      if (payload.dataCenterCountry) {
        text += `<br />Data center country: ${payload.dataCenterCountry}`
      }
      if (payload.dataCenterCity) {
        text += `<br />Data center city: ${payload.dataCenterCity}`
      }
      if (payload.dataCenterZip) {
        text += `<br />Data center ZIP: ${payload.dataCenterZip}`
      }
      if (payload.dataCenterAddress) {
        text += `<br />Data center address: ${payload.dataCenterAddress}`
      }
      if (payload.longitude) {
        text += `<br />Longitude: ${payload.longitude}`
      }
      if (payload.latitude) {
        text += `<br />Latitude: ${payload.latitude}`
      }
      if (payload.idea) {
        text += `<br />Idea related to: ${payload.idea}`
      }
      if (payload.sustainableEnergySource) {
        text += `<br />Sustainable energy source: ${payload.sustainableEnergySource}`
      }
      if (payload.electricalCapacity) {
        text += `<br />Electrical capacity: ${payload.electricalCapacity}`
      }
      if (payload.locationOffer) {
        text += `<br />Location offer: ${payload.locationOffer}`
      }
      if (payload.energySource) {
        text += `<br />Energy source: ${payload.energySource}`
      }
      if (payload.privateEquity) {
        text += `<br />Private equity: ${payload.privateEquity}`
      }
      if (payload.investmentValue) {
        text += `<br />Investment value: ${payload.investmentValue}`
      }
      if (payload.miningHardware) {
        text += `<br />Mining hardware labels: ${payload.miningHardware}`
      }
      if (payload.miningQuantity) {
        text += `<br />Mining hardware quantity: ${payload.miningQuantity}`
      }
      if (payload.businessGoalsMessage) {
        text += `<br />Investment goals and expectations message: ${payload.businessGoalsMessage}`
      }
      if (payload.message) {
        text += `<br />Senders message: ${payload.message}`
      }
      if (payload.listingType) {
        text += `<br />Listing type: ${payload.listingType}`
      }

      const formType = {
        formType: request.body.formType,
      };

      if (formType.formType === "general") {
        formType.formType = "'General contact'"
      }
      if (formType.formType === "hosting") {
        formType.formType = "'Register your hosting needs'"
      }
      if (formType.formType === "investment") {
        formType.formType = "'Register your investment interest'"
      }
      if (formType.formType === "sustainable-energy") {
        formType.formType = "'Register your sustainable energy source'"
      }
      if (formType.formType === "data-center-location") {
        formType.formType = "'Register data center location availability'"
      }
      if (formType.formType === "funding") {
        formType.formType = "'Apply idea for funding'"
      }
      if (formType.formType === "technical-audit") {
        formType.formType = "'Apply for technical audit'"
      }
      const dateTime = new Date();
      const date = dateTime.toLocaleDateString("fr-CH", { timeZone: "Europe/Zurich" })
      const time = dateTime.toLocaleTimeString("fr-CH", { timeZone: "Europe/Zurich" });

      await SendGridService.sendMail(payload, formType, text, date, time);

      response.status(201).send({
        message: "Message sent."
      });
    } catch (error) {
      response.status(error.statusCode || 500).send("Something went wrong.");
    }
  }
}