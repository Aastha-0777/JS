const generator = require('../src/js/generator');

describe('Password Generator', () => {
    test('should generate a password of specified length', () => {
        const length = 10;
        const password = generator.generatePassword(length, true, true, true, true);
        expect(password.length).toBe(length);
    });

    test('should include lowercase letters when selected', () => {
        const password = generator.generatePassword(10, true, false, false, false);
        expect(/[a-z]/.test(password)).toBe(true);
    });

    test('should include uppercase letters when selected', () => {
        const password = generator.generatePassword(10, false, true, false, false);
        expect(/[A-Z]/.test(password)).toBe(true);
    });

    test('should include numbers when selected', () => {
        const password = generator.generatePassword(10, false, false, true, false);
        expect(/[0-9]/.test(password)).toBe(true);
    });

    test('should include symbols when selected', () => {
        const password = generator.generatePassword(10, false, false, false, true);
        expect(/[\W_]/.test(password)).toBe(true);
    });

    test('should throw an error if no character types are selected', () => {
        expect(() => {
            generator.generatePassword(10, false, false, false, false);
        }).toThrow('At least one character type must be selected');
    });
});