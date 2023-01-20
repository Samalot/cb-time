import { handleDate } from '../src/handleDate';

describe('testing handleDate', () => {
    beforeAll(() => {
        jest.clearAllMocks();
    });

    test('convert unix time to date', async () => {
        const dateObject = handleDate(0);
        const isDate = typeof dateObject === 'object' && typeof dateObject.getMonth === 'function';
        expect(isDate).toBe(true);
    });

    test('return same date if given a date', async () => {
        const testEpoch = 802051200000;
        const date = new Date(testEpoch);
        const resultDate = handleDate(date);
        expect(resultDate.getTime()).toBe(testEpoch);
    });

    test('throw error if invalid input', async () => {
        expect(function () { handleDate("invalid") }).toThrow(new Error("Invalid date type"));
    });
});