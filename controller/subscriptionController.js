const router = require('express').Router();
const asyncWrapper = require('../utils/async-wrapper').AsyncWrapper;
const SubscriptionService = require('../service/subscriptionService');

const subscriptionService = new SubscriptionService();

router.get('/', asyncWrapper(async (req, res) => {
    const userId = null;
    let subscriptions = await subscriptionService.findAll(userId);
    return subscriptions;
}));

router.get('/:id', asyncWrapper(async (req, res) => {
    let id = req.params.id;
    let subscription = await subscriptionService.findOne(id);
    res.send(subscription);
}));

router.post('/', asyncWrapper(async (req, res) => {
    let subscription = await subscriptionService.create(req.body);
    res.send(subscription);
}));

router.delete('/', asyncWrapper(async (req, res) => {
    let id = req.params.id;
    await subscriptionService.deleteOne(id);
    res.sendStatus(200);
}));

module.exports = router;


