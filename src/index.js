const Express = require("express");
const Logger = require("./config/log4js.config");
const Https = require("https");


//inicializations
const app = Express();
global.nodeEnv = process.env.NODE_ENV || "dev";
global.logger = new Logger(global.nodeEnv);
let log = global.logger.getLoggerObject();

//middlewares
app.use(global.logger.connectLogger(log, {
    level: "auto",
    format: (req, res, format) => format(":remote-addr - :method :url - :status")
}));

app.use(Express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//settings
app.set('port', process.env.PORT || 4000);

//start server
app.listen(app.get("port"), () => {
    log.info("Server on port-", app.get("port"));
});

//routes
app.use('/api', require('./routes/user.routes'));