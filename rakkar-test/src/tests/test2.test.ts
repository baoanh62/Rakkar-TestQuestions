import  maxProfit from '../services/findMaxProfit';

describe('testing find max profit file', () => {
  test('the list have empty result in zero', () => {
    expect(maxProfit([])).toBe(0);
  });

  test('the list have one element result in zero', () => {
    expect(maxProfit([1])).toBe(0);
  });

  test('the list max sale at middle result in 4', () => {
    expect(maxProfit([2, 3, 6, 4, 3])).toBe(4);
  });

  test('the list max sale at first result in 5', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  test('the list desc not seq result in zero', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  test('the list asc result in 4', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });

  test('the list desc result in zero', () => {
    expect(maxProfit([5, 4, 3, 2, 1])).toBe(0);
  });
});