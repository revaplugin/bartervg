module.exports = function monitorOffers(self, args) {
    self.events.push("newAcceptedOffer");
    let { eventManager } = args;

    // ... ping for accepted offers
    let offer = self.barter.getOffer();
    eventManager.emit("newAcceptedOffer", offer);
};
