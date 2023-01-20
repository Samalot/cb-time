import { convertToEarthDatetime } from '../src/convertToEarthDatetime';

describe('testing convertToEarthDatetime', () => {
    beforeAll(() => {
        jest.clearAllMocks();
    });

    test('convert to time without origin', async () => {
        const datetime = convertToEarthDatetime([2667, 50, 1, 1, 22, 36]);
        expect(datetime.getTime()).toBe(14007018452000);
    });

    test('convert to time with origin', async () => {
        const datetime = convertToEarthDatetime([3982, 38, 3, 1, 22, 36], new Date(2537740800000));
        expect(datetime.getTime()).toBe(14007018452000);
    });
});
