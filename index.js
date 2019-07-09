module.exports = options => {
  const console = require('./lib/console');
  const chalk = require('chalk');
  const util = require('util');
  const getTime = require('./lib/get-time');

  const inspect = arg => {
    if (typeof arg !== 'object' && !Array.isArray(arg)) {
      return arg;
    }
    return util.inspect(arg, { depth: 3 });
  };

  const opts = {
    appendTime: true,
    coloredOutput: false,
    methods: {
      ok: {
        muteable: false,
        color: 'yellow',
        token: ' ✔ ︎',
      },
      subtle: {
        muteable: true,
        color: 'gray',
        token: ' ▸ ',
      },
      error: {
        muteable: false,
        color: 'red',
        token: ' ✘ ',
      },
      log: {
        muteable: true,
        color: 'white',
        token: ' ℹ︎ ',
      },
      warn: {
        muteable: false,
        color: 'magenta',
        token: ' ⚠︎ ',
      },
      print: {
        muteable: false,
        noAppendTime: true,
        color: 'gray',
        token: null,
      },
      success: {
        muteable: false,
        color: 'green',
        token: ' ✓ ︎',
      },
    },
    ...options,
  };

  const defineMethod = function defineMethod(entry, key) {
    return function logMethod(...args) {
      if (opts.quiet && entry.muteable) {
        return;
      }

      if (opts.appendTime && !entry.noAppendTime) {
        args.unshift(`[${getTime()}]`);
      }

      if (entry.token) {
        args.unshift(entry.token);
      }

      args = args.map(arg => (opts.coloredOutput ? chalk[entry.color](inspect(arg)) : inspect(arg)));

      const logFn = key !== 'error' ? 'log' : 'error';

      console[logFn](...args);
    };
  };

  const methods = opts.methods;

  const log = Object.keys(methods).reduce((seq, key) => {
    seq[key] = defineMethod(methods[key], key);
    return seq;
  }, {});

  return log;
};
