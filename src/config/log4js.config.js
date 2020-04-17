/* Archivo de configuracion del logger (log4js). Se configurara la forma en la que se muestran y/o 
almacenan los logs de acuerdo con el entorno que se este ejecutando.  
 */

'use strict'
const log4js = require("log4js");

class Logger {

    constructor(env){

        let level = "";

        /* switch(env){
            case "dev":
                level = "trace";
                break;
            case "test":
                level = "info";
                break;
            default:
                level = "error";
                break;
        } */

        this.parameters = {
            appenders: {
                access: {
                    type: "console"
                },
                app: {
                    type: "console",
                    layout: {
                        type: 'pattern',
                        pattern: '%[ [%d] [%p] %f{1}:%l -- %m %]'
                    }
                },
                logFile: {
                    type: "file",
                    layout: {
                        type: 'pattern',
                        pattern: '[%d] [%p] %f{1}:%l -- %m'
                    },
                    filename: "src/var/log/out.log",
                    maxLogSize: 10485760, backups: 3, compress: true   
                },
                logs: {
                    type: "logLevelFilter",
                    level: "TRACE",
                    appender: "logFile"
                }
            },
            categories: { 
                default: { appenders: [ "app", "logs" ], level: "trace" ,enableCallStack:true },
                http: { appenders: [ "access" ], level: "DEBUG" } 
            }

        };
        
        log4js.configure(this.parameters);
    }

    getLoggerObject(val) {
        return log4js.getLogger(val);
    }

    connectLogger(logger, options) {
        return log4js.connectLogger(logger, options);
    }
}

module.exports = Logger;