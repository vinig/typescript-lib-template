import { foo } from '../src/your-shared-app';

describe('call foo', () => {
  test('returns hello world', () => {
    expect(foo()).toEqual('Hello World!');
  });
});
