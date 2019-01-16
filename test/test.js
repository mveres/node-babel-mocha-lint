import { expect } from 'chai';

describe('sample test', () =>
  it('should work with es6 async/await', async () => {
    const res = await Promise.resolve(42);
    expect(res).to.equal(43);
  }),
);
