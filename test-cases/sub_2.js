const assert = require('assert');
const { expect } = require('chai')
const { sub } = require('../src/sub');

describe('the subtract function', () => {
  it('should subtract 2 numbers together using assert', () => {
    const result = sub(3, 2);
    assert.equal(result, 1);
  });
  // <--EXPECT-->
  it('should subtract 2 numbers together using expect', () => {
    const result = sub(5, 2);
    expect(result).to.be.eq(3);
  });
  it('should be able to handle 1 number', () => {
    const result = sub(2);
    expect(result).to.be.eq(2);
  });
  it('should be able to a greater right hand number', () => {
    const result = sub(2, 4);
    expect(result).to.be.eq(2);
  });
  it('should be able to handle string', () => {
    const result = sub('sds');
    expect(result).to.be.eq(0);
  });
})