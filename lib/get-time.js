module.exports = format => {
  const moment = require('moment');
  format = format || 'HH:mm:ss';
  return moment().format(moment().format(format));
};
