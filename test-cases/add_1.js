const assert = require('assert');
const { expect } = require('chai')
const { add } = require('../src/add');

// <--ASSERT-->
describe('the add function', () => {
  it('should add 2 numbers together using assert', () => {
    const result = add(2, 2);
    assert.equal(result, 4);
  });
  // <--EXPECT-->
  it('should add 2 numbers together using expect', () => {
    const result = add(2, 2);
    expect(result).to.be.eq(4);
  });
  it('should be able to handle 1 number', () => {
    const result = add(2);
    expect(result).to.be.eq(2);
  });
  it('should be able to handle 0 number', () => {
    const result = add();
    expect(result).to.be.eq(0);
  });
  it('should be able to handle string', () => {
    const result = add('sds');
    expect(result).to.be.eq(0);
  });
})