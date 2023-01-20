import { handleDate } from './handleDate';

// Takes in a date 'earthDatetime', either in the form of JS Date object or Unix Time Epoch number
// Takes in an optional origin date representing the begining of the TPL in Earth time, either in the form of JS Date object or Unix Time Epoch number. 
// Returns an array containing TPL time, structured like [cycle, cirxit, syx, stax, blox, tix]

export const convertToTplDatetime = (
    earthDatetime: number | Date,
    origin = new Date(6324609600000)
): number[] => {
    const safeEarthDate = handleDate(earthDatetime);
    const safeOriginDate = origin || handleDate(origin);
    const tlpTime = [0, 0, 0, 0, 0, 0];

    const secondPassed = (safeEarthDate.getTime() - safeOriginDate.getTime()) / 1000

    let pool = secondPassed * 3;

    tlpTime[0] = Math.floor(pool / 8640000);
    pool = pool % 8640000;

    tlpTime[1] = Math.floor(pool / 86400);
    pool = pool % 86400;

    tlpTime[2] = Math.floor(pool / 21600);
    pool = pool % 21600;

    tlpTime[3] = Math.floor(pool / 3600);
    pool = pool % 3600;

    tlpTime[4] = Math.floor(pool / 60);
    pool = pool % 60;

    tlpTime[5] = pool;

    return tlpTime;
};