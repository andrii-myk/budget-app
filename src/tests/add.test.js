const add = (a, b) => a + b

const generateGreeting = name => `Hello ${name}!`

test('should add two numbers', () => {
    const result = add(1,3)
    expect(result).toBe(4)

})

test('should check generateGreeting', () => {
    expect(generateGreeting('Adam')).toBe('Hello Adam!')
})