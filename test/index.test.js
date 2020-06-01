import { calculate } from '../src/index';

test('expect to return 45 on not even list...', () => {
  const list = [2, 89, 45, 45, 56, 34, 100];
  expect(calculate(list)).toBe(45);
});

test('expect to return 30 on odd list...', () => {
  const list = [2, 89, 10, 50, 56, 34];
  expect(calculate(list)).toBe(30);
});
