const RevaPlugin = require("@revaplugin/RevaPlugin");

module.exports = class BarterVG extends RevaPlugin {

    constructor() {
        super();
        this.barter = null;
        this.loadTasks();
    }

};
