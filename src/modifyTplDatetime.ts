export const modifyTplDatetime = (tplDatetime: number[], tixAmount: number): number[] => {
    if (Object.prototype.toString.call(tplDatetime) !== '[object Array]' || tplDatetime.length !== 6) {
        throw new Error('Invalid TPL time');
    }

    const modifiedTime = [...tplDatetime];
    modifiedTime[5] += tixAmount;

    if (modifiedTime[5] >= 60) {
        modifiedTime[4] += Math.floor(modifiedTime[5] / 60);
        modifiedTime[5] %= 60

        if (modifiedTime[4] >= 60) {
            modifiedTime[3] += Math.floor(modifiedTime[4] / 60);
            modifiedTime[4] %= 60

            if (modifiedTime[3] >= 6) {
                modifiedTime[2] += Math.floor(modifiedTime[3] / 6);
                modifiedTime[3] %= 6

                if (modifiedTime[2] >= 4) {
                    modifiedTime[1] += Math.floor(modifiedTime[2] / 4);
                    modifiedTime[2] %= 4

                    if (modifiedTime[1] >= 100) {
                        modifiedTime[0] += Math.floor(modifiedTime[1] / 100);
                        modifiedTime[1] %= 100
                    }
                }
            }
        }
    }

    return modifiedTime;
};