import sum from '../func/sum';

test("add 1+1=2", () => {
  const result = sum(1, 1)
  expect(result).toBe(2)
})
