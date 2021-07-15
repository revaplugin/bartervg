const Barter = require("libbarter");

module.exports = async function login(self, args) {
    let { steam } = args;

    // WILL BE DONE BY REVAPLUGIN
    // if (!steam) {
    //     throw new Error("Requires @revaplugin/steam");
    // }

    if (!await steam.loggedIn()) {
        throw new Error("Requires to be logged into steam");
    }

    let cookies = await steam.signInThroughSteam("https://barter.vg/login/?login");
    let login = cookies.find((c) => c.name === "login");
    self.barter = new Barter(300, login);

    let me = await self.barter.getUser();
    return me;
};
