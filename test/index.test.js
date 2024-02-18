
import pref, { type, color, newLine } from '../app/index.js';

describe('pref object', () => {
    test('should exist', () => {
        expect(pref).toBeDefined();
    });

    test('should have type property', () => {
        expect(pref).toHaveProperty('type');
    });

    test('type property should be boolean', () => {
        expect(typeof type).toBe('boolean');
    });

    test('should have color property', () => {
        expect(pref).toHaveProperty('color');
    });

    test('color property should be boolean', () => {
        expect(typeof color).toBe('boolean');
    });

    test('should have newLine property', () => {
        expect(pref).toHaveProperty('newLine');
    });

    test('newLine property should be boolean', () => {
        expect(typeof newLine).toBe('boolean');
    });
});