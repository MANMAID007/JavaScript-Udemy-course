const rewire = require('rewire');

const script = rewire('./script');

const printGoals = script.__get__('printGoals');

// @ponicode
describe('printGoals', () => {
  test('0', () => {
    printGoals(['a', 'b', 'c']);
  });
});
