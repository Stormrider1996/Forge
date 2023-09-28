import fs from "fs";
import path from "path";
import V from "node-vault-js";
import Listener from "felony/dist/base/Listener.js";

/**
 * Event listener that will trigger on the events you add in listen array
 *
 * @class
 */
export default class Vault extends Listener {
  /**
   * List of event constructor names that this listener will be triggered for
   *
   * @type {string[]}
   */
  static listen = [
    "FelonyDefined",
  ];

  /**
   * Handler that will trigger after the event was raised, event will be available under this.event: Event
   *
   * @return {Promise<void>}
   */
  async handle() {
    const config = await this.vault();

    /**
     * Function for getting the configuration in config file
     *
     * @param {string} key
     * @param {any} def
     * @return {*}
     * @private
     */
    globalThis.__vault = (key, def = null) => {
      const _config = config;

      let keys = [];

      if (typeof key === "number") {
        keys.push(key);
      }
      else if (typeof key === "string") {
        keys = key.split(".");
      }

      let _branch = def;

      for (const item of keys) {
        if (_branch === def) {
          _branch = _config[item];
        }
        else if (_branch) {
          _branch = _branch[item];
        }
      }

      return _branch;
    };
  }

  /**
   * Connect to Vault and get the configuration data
   *
   * @envParam {String} MODULE_WORKSPACE [Name of the workspace stored in Vault]
   * @envParam {String} VAULT_ADDR [Address where Vault will connect]
   * @envParam {String} VAULT_TOKEN [Authentication token for Vault]
   * @envParam {String} [VAULT_CA_CERT_PATH] [File location of CA cert for Vault]
   *
   * @return {Promise<void>}
   */
  vault() {
    return new Promise((resolve, reject) => {
      let local = {};

      try {
        local = JSON.parse(fs.readFileSync(path.resolve(Felony.appRootPath, "vault.json")));
      }
      catch (e) {
        // Do nothing...
      }

      const vaultOptions = {
        endpoint: process.env.VAULT_ADDR,
        token: process.env.VAULT_TOKEN,
      };

      if (process.env.VAULT_CA_CERT_PATH) {
        vaultOptions.requestOptions = {
          ca: fs.readFileSync(process.env.VAULT_CA_CERT_PATH),
        };
      }

      if (!vaultOptions.endpoint || !vaultOptions.token) {
        return resolve(local);
      }

      try {
        const vault = new V(vaultOptions);

        vault.read(process.env.MODULE_WORKSPACE, (error, result) => {
          if (error) {
            Felony.log.error(error);
            process.exit(1);
          }

          if (result.warnings && result.warnings.length) {
            for (const warning of result.warnings) {
              console.error("Vault warning: ", warning);
            }
          }

          const loaded = (result.data || {}).data || {};

          resolve({
            // ...local,
            ...loaded,
          });
        });
      }
      catch (error) {
        Felony.log.error(error);

        process.exit(1);
      }
    });
  }
}