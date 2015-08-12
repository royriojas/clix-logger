var l = require( './logger' );
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
