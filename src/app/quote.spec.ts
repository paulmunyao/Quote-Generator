import { Quote } from './quote';

describe('Quote', () => {
  it('should create an instance', () => {
    expect(new Quote("name","author","quote")).toBeTruthy();
  });
});
