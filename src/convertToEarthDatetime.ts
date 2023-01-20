import { handleDate } from './handleDate';

// Takes an array of 6 numbers, representing TPL time, structured like [cycle, cirxit, syx, stax, blox, tix]
// Takes in an optional origin date representing the begining of the TPL in Earth time, either in the form of JS Date object or Unix Time Epoch number. 
// Returns a JS date object of the TPL time converted to Earths

export const convertToEarthDatetime = (
    tplDatetime: number[],
    origin = new Date(6324609600000)
): Date => {
    if (Object.prototype.toString.call(tplDatetime) !== '[object Array]' || tplDatetime.length !== 6) {
        throw new Error('Invalid TPL time');
    }

    const safeOriginDate = origin || handleDate(origin);

    let tlpSeconds = 0;
    tlpSeconds += tplDatetime[0] * 8640000;
    tlpSeconds += tplDatetime[1] * 86400;
    tlpSeconds += tplDatetime[2] * 21600;
    tlpSeconds += tplDatetime[3] * 3600;
    tlpSeconds += tplDatetime[4] * 60;
    tlpSeconds += tplDatetime[5];

    const earthMilliseconds = Math.floor((tlpSeconds / 3) * 1000);
    return new Date(safeOriginDate.getTime() + earthMilliseconds);
};