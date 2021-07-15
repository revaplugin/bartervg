const RevaPlugin = require("@revaplugin/revaplugin");

module.exports = class BarterVG extends RevaPlugin {

    // Plugin properties
    static _directory = module.path;

    static _name = "bartervg";

    static _singleInstance = false;

    constructor(params) {
        super(params);
        this.barter = null;
    }

};
