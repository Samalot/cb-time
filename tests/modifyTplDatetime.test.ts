import { modifyTplDatetime } from '../src/modifyTplDatetime';

describe('testing modifyTplDatetime', () => {
    beforeAll(() => {
        jest.clearAllMocks();
    });

    test('modify time', async () => {
        expect(modifyTplDatetime([3982, 38, 3, 1, 22, 36], 1)).toStrictEqual([3982, 38, 3, 1, 22, 37]);
        expect(modifyTplDatetime([3982, 38, 3, 1, 22, 36], -1)).toStrictEqual([3982, 38, 3, 1, 22, 35]);
        expect(modifyTplDatetime([3982, 38, 3, 1, 22, 36], 1234567890)).toStrictEqual([4125, 27, 3, 0, 54, 6]);
    });

    test('throw error if invalid input', async () => {
        expect(function () { modifyTplDatetime([3982, 38, 3, 1, 22], 1) }).toThrow(new Error("Invalid TPL time"));
    });
});