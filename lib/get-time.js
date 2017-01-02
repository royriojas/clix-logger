var moment = require( 'moment' );

module.exports = function ( format ) {
  format = format || 'HH:mm:ss';
  return moment().format( moment().format( format ) );
};
