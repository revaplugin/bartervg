const RevaPlugin = require("@revaplugin/revaplugin");

module.exports = class BarterVG extends RevaPlugin {

    constructor() {
        super();
        this.barter = null;
        this.loadTasks();
    }

};
