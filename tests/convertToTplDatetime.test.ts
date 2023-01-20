import { convertToTplDatetime } from '../src/convertToTplDatetime';

describe('testing convertToTplDatetime', () => {
    beforeAll(() => {
        jest.clearAllMocks();
    });

    test('convert to time without origin', async () => {
        const tplTime = convertToTplDatetime(14007018452000);
        expect(tplTime).toStrictEqual([2667, 50, 1, 1, 22, 36]);
    });

    test('convert to time with origin', async () => {
        const tplTime = convertToTplDatetime(14007018452000, new Date(2537740800000));
        expect(tplTime).toStrictEqual([3982, 38, 3, 1, 22, 36]);
    });
});
