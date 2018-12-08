import * as fs from 'fs';
import * as path from 'path';

export const parseData = (fileName: string) => {
    return fs.readFileSync(path.resolve(__dirname, fileName), 'utf8').split(/\r?\n/);
};

export const getFileNameArg = () => {
    return process.argv[2];
};
