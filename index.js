const Tasks = require("./tasks/index");
let CustomTasks = {};
try { CustomTasks = require("./tasks/custom/index"); } catch (e) { /* No custom tasks */ }

class BarterVG {

    constructor() {
        this.barter = null;
        this.tasks = { ...Tasks, ...CustomTasks };
        this.events = [];
    }

}

module.exports = { BarterVG };
