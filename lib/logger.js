const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${level}] [${label}] : ${message}`;
});

module.exports= createLogger({
  format: combine(
    label({ label: 'Logging Appender' }),
    timestamp(),
    myFormat,
  ),
  transports: [
      new transports.Console({level: 'debug' }),
      new transports.File({ filename: './logs/eMQTT-FrontEnd.log', level: 'debug' })
    ]
});