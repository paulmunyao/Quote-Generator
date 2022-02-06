import { Quote } from './quote';

describe('Quote', () => {
  it('should create an instance', () => {
    expect(new Quote("name","description",0)).toBeTruthy();
  });
});
