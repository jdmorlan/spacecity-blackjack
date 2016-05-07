// The expect and expect-jsx libraries are used for assertions.
// For more information check out the following links:
//
// https://www.npmjs.com/package/expect
// https://www.npmjs.com/package/expect-jsx

import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX);

describe('empty', () => {

  it('it works', () => {
    expect(true).toEqual(true);
  });
});
