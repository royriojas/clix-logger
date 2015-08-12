module.exports = function ( options ) {
  var console = require( './lib/console' );
  var chalk = require( 'chalk' );
  var extend = require( 'extend' );
  var util = require( 'util' );

  var inspect = function ( arg ) {
    if ( typeof arg !== 'object' && !Array.isArray( arg ) ) {
      return arg;
    }
    return util.inspect( arg, { depth: 3 } );
  };

  var opts = extend( {
    coloredOutput: false,
    methods: {
      ok: {
        muteable: false,
        color: 'yellow',
        token: ' ✔ ︎'
      },
      subtle: {
        muteable: true,
        color: 'gray',
        token: ' ▸ '
      },
      error: {
        muteable: false,
        color: 'red',
        token: ' ✘ '
      },
      log: {
        muteable: true,
        color: 'white',
        token: ' ℹ︎ '
      },
      warn: {
        muteable: false,
        color: 'magenta',
        token: ' ⚠︎ '
      },
      print: {
        muteable: false,
        color: 'gray',
        token: null
      },
      success: {
        muteable: false,
        color: 'green',
        token: ' ✓ ︎'
      }
    }
  }, options );

  var defineMethod = function defineMethod( entry, key ) {
    return function logMethod() {
      if ( opts.quiet && entry.muteable ) {
        return;
      }
      var args = [ ].slice.call( arguments );

      if ( entry.token ) {
        // if (opts.showDate) {
        //   args.unshift( moment().format(opts.dateFormat) + chalk.gray(' '+ chalk.gray('|')));
        // }
        args.unshift( entry.token );
      }

      args = args.map( function ( arg ) {
        return opts.coloredOutput ? chalk[ entry.color ]( inspect( arg ) ) : inspect( arg );
      } );
      //var logFn = 'log';
      var logFn = (key !== 'error') ? 'log' : 'error';

      console[ logFn ].apply( console, args );

    };
  };

  var methods = opts.methods;

  var log = Object.keys( methods ).reduce( function ( seq, key ) {
    seq[ key ] = defineMethod( methods[ key ], key );
    return seq;
  }, { } );

  return log;
};
