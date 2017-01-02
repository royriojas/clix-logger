describe( 'clix-logger', function () {

  it( 'should log complex objects', function () {
    var proxyquire = require( 'proxyquire' );
    var lines = [ ];

    var l = proxyquire( '../', {
      './lib/get-time': function () {
        return '02:45:22';
      },
      './lib/console': {
        log: function () {
          var args = [ ].slice.call( arguments );
          lines.push( args.join( ' ' ) );
        },
        error: function () {
          var args = [ ].slice.call( arguments );
          lines.push( args.join( ' ' ) );
        }
      }
    } )( { coloredOutput: false } );

    l.ok( 'a', 'simple', 'message', 'of', 'type', 'ok', {
      coloredOutput: false
    }, [ 1, 2, 3 ] );

    l.subtle( 'a', 'simple', 'message', 'of', 'type', 'subtle', {
      coloredOutput: false
    }, [ 1, 2, 3 ] );

    l.log( 'a', 'simple', 'message', 'of', 'type', 'log', {
      coloredOutput: false
    }, [ 1, 2, 3 ] );

    l.error( 'a', 'simple', 'message', 'of', 'type', 'error', {
      coloredOutput: false
    }, [ 1, 2, 3 ] );

    l.print( 'a', 'simple', 'message', 'of', 'type', 'print', {
      coloredOutput: false
    }, [ 1, 2, 3 ] );

    l.success( 'a', 'simple', 'message', 'of', 'type', 'success', {
      coloredOutput: false
    }, [ 1, 2, 3 ] );

    l.warn( 'a', 'simple', 'message', 'of', 'type', 'warn', {
      coloredOutput: false
    }, [ 1, 2, 3 ] );

    // require( 'fs' ).writeFileSync( './specs/fixtures/complex-objects.txt', lines.join( '\n' ) );
    var expected = require( 'fs' ).readFileSync( './specs/fixtures/complex-objects.txt', {
      encoding: 'utf8'
    } );

    expect( lines.join( '\n' ) ).to.equal( expected );

  } );

  it( 'should log some messages without colors', function () {
    var proxyquire = require( 'proxyquire' );
    var lines = [ ];

    var l = proxyquire( '../', {
      './lib/console': {
        log: function () {
          var args = [ ].slice.call( arguments );
          lines.push( args.join( ' ' ) );
        },
        error: function () {
          var args = [ ].slice.call( arguments );
          lines.push( args.join( ' ' ) );
        }
      }
    } )( { coloredOutput: false, appendTime: false } );

    l.ok( 'a', 'simple', 'message', 'of', 'type', 'ok' );
    l.subtle( 'a', 'simple', 'message', 'of', 'type', 'subtle' );
    l.log( 'a', 'simple', 'message', 'of', 'type', 'log' );
    l.error( 'a', 'simple', 'message', 'of', 'type', 'error' );
    l.print( 'a', 'simple', 'message', 'of', 'type', 'print' );
    l.success( 'a', 'simple', 'message', 'of', 'type', 'success' );
    l.warn( 'a', 'simple', 'message', 'of', 'type', 'warn' );

    var expected = [
      ' ✔ ︎ a simple message of type ok',
      ' ▸  a simple message of type subtle',
      ' ℹ︎  a simple message of type log',
      ' ✘  a simple message of type error',
      'a simple message of type print',
      ' ✓ ︎ a simple message of type success',
      ' ⚠︎  a simple message of type warn'
    ];

    expect( lines.join( '\n' ) ).to.equal( expected.join( '\n' ) );

  } );

  it( 'should only log error, ok, print and success', function () {
    var proxyquire = require( 'proxyquire' );
    var lines = [ ];

    var l = proxyquire( '../', {
      './lib/console': {
        log: function () {
          var args = [ ].slice.call( arguments );
          lines.push( args.join( ' ' ) );
        },
        error: function () {
          var args = [ ].slice.call( arguments );
          lines.push( args.join( ' ' ) );
        }
      }
    } )( { coloredOutput: false, quiet: true, appendTime: false } );

    l.ok( 'a', 'simple', 'message', 'of', 'type', 'ok' );
    l.subtle( 'a', 'simple', 'message', 'of', 'type', 'subtle' );
    l.log( 'a', 'simple', 'message', 'of', 'type', 'log' );
    l.error( 'a', 'simple', 'message', 'of', 'type', 'error' );
    l.print( 'a', 'simple', 'message', 'of', 'type', 'print' );
    l.success( 'a', 'simple', 'message', 'of', 'type', 'success' );
    l.warn( 'a', 'simple', 'message', 'of', 'type', 'warn' );

    var expected = [
      ' ✔ ︎ a simple message of type ok',
      ' ✘  a simple message of type error',
      'a simple message of type print',
      ' ✓ ︎ a simple message of type success',
      ' ⚠︎  a simple message of type warn'
    ];

    expect( lines.join( '\n' ) ).to.equal( expected.join( '\n' ) );

  } );

  it( 'should log some messages with colors', function () {
    var proxyquire = require( 'proxyquire' );
    var lines = [ ];

    var l = proxyquire( '../', {
      './lib/console': {
        log: function () {
          var args = [ ].slice.call( arguments );
          lines.push( args.join( ' ' ) );
        },
        error: function () {
          var args = [ ].slice.call( arguments );
          lines.push( args.join( ' ' ) );
        }
      }
    } )( { coloredOutput: true, appendTime: false } );

    l.ok( 'a', 'simple', 'message', 'of', 'type', 'ok' );
    l.subtle( 'a', 'simple', 'message', 'of', 'type', 'subtle' );
    l.log( 'a', 'simple', 'message', 'of', 'type', 'log' );
    l.error( 'a', 'simple', 'message', 'of', 'type', 'error' );
    l.print( 'a', 'simple', 'message', 'of', 'type', 'print' );
    l.success( 'a', 'simple', 'message', 'of', 'type', 'success' );
    l.warn( 'a', 'simple', 'message', 'of', 'type', 'warn' );

    // require( 'fs' ).writeFileSync( './specs/fixtures/colored-output.txt', lines.join( '\n' ) );
    var expected = require( 'fs' ).readFileSync( './specs/fixtures/colored-output.txt', {
      encoding: 'utf8'
    } );

    expect( lines.join( '\n' ) ).to.equal( expected );

  } );
} );
