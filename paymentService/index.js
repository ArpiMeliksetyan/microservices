const PaymentService = require('./paymentsService');

const CONNECTION_STRING = process.env.AMQP_CONNECTION_STRING;
const CHANNEL_NAME = process.env.AMPQP_CHANNEL_NAME;
const QUEUE_NAME = process.env.AMQP_QUEUE_NAME;

let service = new PaymentService(CONNECTION_STRING, CHANNEL_NAME, QUEUE_NAME);
service.init();
