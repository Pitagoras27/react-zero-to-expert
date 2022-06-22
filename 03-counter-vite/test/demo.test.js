test('This test not fail', () => {
  // 1. arrange
  const message1 = 'Hola Mundo!'
  // 2. act
  const message2 = message1.trim();
  // 3. assert
  expect(message1).toBe(message2);
});