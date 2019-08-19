const add = (a, b) => a + b + 0;

test('should add two number', () => {
    const result = add(3, 4);
    const x = 7;
    expect(result).toBe(x);
});
