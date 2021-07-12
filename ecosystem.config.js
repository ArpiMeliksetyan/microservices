const AMQP_CONNECTION_STRING = "amqps://sgdiaeqn:Nf3SfL2ICi9drFP47KKyuslZcT1A0GDB@snake.rmq2.cloudamqp.com/sgdiaeqn";
const AMQP_CHANNEL_NAME = "PAYMENTS_GATEWAY";
const AMQP_QUEUE_NAME = "PAYMENTS_QUEUE";

const TOKEN_ISSUER = 'saas';
const AUTH_SECRET = 'abcdef123456';

module.exports = {
    apps: [{
        name: "plansService",
        script: "./plansService/index.js",
        watch: true,
        env: {
            NODE_ENV: "development",
            MYSQL_USER: "root",
            MYSQL_PASS: "123456789###",
            MYSQL_HOST: "localhost",
            MYSQL_PORT: 3307,
            MYSQL_DB: "PlansDb",
            PORT: 3001,
            TOKEN_ISSUER,
            AUTH_SECRET
        },
        env_production: {
            NODE_ENV: "production"
        }
    }, {
        name: "subscriptionsService",
        script: "./subscriptionsService/index.js",
        watch: true,
        env: {
            NODE_ENV: "development",
            MYSQL_USER: "root",
            MYSQL_PASS: "123456789###",
            MYSQL_HOST: "localhost",
            MYSQL_PORT: 3308,
            MYSQL_DB: "SubscriptionsDb",
            PORT: 3002,
            AMQP_CONNECTION_STRING,
            AMQP_CHANNEL_NAME,
            AMQP_QUEUE_NAME,
            TOKEN_ISSUER,
            AUTH_SECRET
        },
        env_production: {
            NODE_ENV: "production"
        }

    },
        {
            name: "paymentService",
            script: "./paymentService/index.js",
            watch: true,
            env: {
                AMQP_CONNECTION_STRING,
                AMQP_CHANNEL_NAME,
                AMQP_QUEUE_NAME
            },
            env_production: {}
        }, {
            name: "authService",
            script: "./authService/index.js",
            watch: true,
            env: {
                NODE_ENV: "development",
                MYSQL_USER: "root",
                MYSQL_PASS: "123456789###",
                MYSQL_HOST: "localhost",
                MYSQL_PORT: 3309,
                MYSQL_DB: "Users",
                PORT: 3003,
                TOKEN_ISSUER,
                AUTH_SECRET
            },
            env_production: {
                NODE_ENV: "production"
            }

        }]
}
