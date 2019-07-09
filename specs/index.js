describe('clix-logger', () => {
  it('should log complex objects', () => {
    const proxyquire = require('proxyquire');
    const lines = [];

    const l = proxyquire('../', {
      './lib/get-time': () => '02:45:22',
      './lib/console': {
        log(...args) {
          lines.push(args.join(' '));
        },
        error(...args) {
          lines.push(args.join(' '));
        },
      },
    })({ coloredOutput: false });

    l.ok(
      'a',
      'simple',
      'message',
      'of',
      'type',
      'ok',
      {
        coloredOutput: false,
      },
      [1, 2, 3],
    );

    l.subtle(
      'a',
      'simple',
      'message',
      'of',
      'type',
      'subtle',
      {
        coloredOutput: false,
      },
      [1, 2, 3],
    );

    l.log(
      'a',
      'simple',
      'message',
      'of',
      'type',
      'log',
      {
        coloredOutput: false,
      },
      [1, 2, 3],
    );

    l.error(
      'a',
      'simple',
      'message',
      'of',
      'type',
      'error',
      {
        coloredOutput: false,
      },
      [1, 2, 3],
    );

    l.print(
      'a',
      'simple',
      'message',
      'of',
      'type',
      'print',
      {
        coloredOutput: false,
      },
      [1, 2, 3],
    );

    l.success(
      'a',
      'simple',
      'message',
      'of',
      'type',
      'success',
      {
        coloredOutput: false,
      },
      [1, 2, 3],
    );

    l.warn(
      'a',
      'simple',
      'message',
      'of',
      'type',
      'warn',
      {
        coloredOutput: false,
      },
      [1, 2, 3],
    );

    // require( 'fs' ).writeFileSync( './specs/fixtures/complex-objects.txt', lines.join( '\n' ) );
    const expected = require('fs').readFileSync('./specs/fixtures/complex-objects.txt', {
      encoding: 'utf8',
    });

    expect(lines.join('\n')).to.equal(expected);
  });

  it('should log some messages without colors', () => {
    const proxyquire = require('proxyquire');
    const lines = [];

    const l = proxyquire('../', {
      './lib/console': {
        log(...args) {
          lines.push(args.join(' '));
        },
        error(...args) {
          lines.push(args.join(' '));
        },
      },
    })({ coloredOutput: false, appendTime: false });

    l.ok('a', 'simple', 'message', 'of', 'type', 'ok');
    l.subtle('a', 'simple', 'message', 'of', 'type', 'subtle');
    l.log('a', 'simple', 'message', 'of', 'type', 'log');
    l.error('a', 'simple', 'message', 'of', 'type', 'error');
    l.print('a', 'simple', 'message', 'of', 'type', 'print');
    l.success('a', 'simple', 'message', 'of', 'type', 'success');
    l.warn('a', 'simple', 'message', 'of', 'type', 'warn');

    const expected = [
      ' ✔ ︎ a simple message of type ok',
      ' ▸  a simple message of type subtle',
      ' ℹ︎  a simple message of type log',
      ' ✘  a simple message of type error',
      'a simple message of type print',
      ' ✓ ︎ a simple message of type success',
      ' ⚠︎  a simple message of type warn',
    ];

    expect(lines.join('\n')).to.equal(expected.join('\n'));
  });

  it('should only log error, ok, print and success', () => {
    const proxyquire = require('proxyquire');
    const lines = [];

    const l = proxyquire('../', {
      './lib/console': {
        log(...args) {
          lines.push(args.join(' '));
        },
        error(...args) {
          lines.push(args.join(' '));
        },
      },
    })({ coloredOutput: false, quiet: true, appendTime: false });

    l.ok('a', 'simple', 'message', 'of', 'type', 'ok');
    l.subtle('a', 'simple', 'message', 'of', 'type', 'subtle');
    l.log('a', 'simple', 'message', 'of', 'type', 'log');
    l.error('a', 'simple', 'message', 'of', 'type', 'error');
    l.print('a', 'simple', 'message', 'of', 'type', 'print');
    l.success('a', 'simple', 'message', 'of', 'type', 'success');
    l.warn('a', 'simple', 'message', 'of', 'type', 'warn');

    const expected = [
      ' ✔ ︎ a simple message of type ok',
      ' ✘  a simple message of type error',
      'a simple message of type print',
      ' ✓ ︎ a simple message of type success',
      ' ⚠︎  a simple message of type warn',
    ];

    expect(lines.join('\n')).to.equal(expected.join('\n'));
  });

  it('should log some messages with colors', () => {
    const proxyquire = require('proxyquire');
    const lines = [];

    const l = proxyquire('../', {
      './lib/console': {
        log(...args) {
          lines.push(args.join(' '));
        },
        error(...args) {
          lines.push(args.join(' '));
        },
      },
    })({ coloredOutput: true, appendTime: false });

    l.ok('a', 'simple', 'message', 'of', 'type', 'ok');
    l.subtle('a', 'simple', 'message', 'of', 'type', 'subtle');
    l.log('a', 'simple', 'message', 'of', 'type', 'log');
    l.error('a', 'simple', 'message', 'of', 'type', 'error');
    l.print('a', 'simple', 'message', 'of', 'type', 'print');
    l.success('a', 'simple', 'message', 'of', 'type', 'success');
    l.warn('a', 'simple', 'message', 'of', 'type', 'warn');

    // require( 'fs' ).writeFileSync( './specs/fixtures/colored-output.txt', lines.join( '\n' ) );
    const expected = require('fs').readFileSync('./specs/fixtures/colored-output.txt', {
      encoding: 'utf8',
    });

    expect(lines.join('\n')).to.equal(expected);
  });
});
