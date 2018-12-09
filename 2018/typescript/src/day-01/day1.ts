interface FrequencyInput {
    symbol: string;
    value: number;
}

export const massagedData = (inputs: string[]): FrequencyInput[] =>
    inputs.map(input => ({
        symbol: input.substring(0, 1),
        value: Number(input.substring(1))
    }));

export const calculateFrequency = (inputs: string[], initalValue: number = 0) =>
    massagedData(inputs).reduce((acc, cur) => {
        return cur.symbol === '-' ? acc - cur.value : acc + cur.value;
    }, initalValue);

export const findDuplicateFrequency = (input: string[]) => {
    let found: boolean = false;
    let runningFrequency: number = 0;
    let foundFrequencies: any = { 0: true };
    let duplicateFrequency: number = 0;

    while (!found) {
        for (const frequency of input) {
            runningFrequency += +frequency;
            if (foundFrequencies[runningFrequency]) {
                duplicateFrequency = runningFrequency;
                found = true;
                break;
            } else {
                foundFrequencies[runningFrequency] = true;
            }
        }
    }
    return duplicateFrequency;
};
