import { calculateFrequency, findDuplicateFrequency } from './day1';

describe('day 1 part 1 functions', () => {
    it('should be 3', () => {
        const data = ['+1', '+1', '+1'];
        expect(calculateFrequency(data)).toBe(3);
    });

    it('should be 0', () => {
        const data = ['+1', '+1', '-2'];
        expect(calculateFrequency(data)).toBe(0);
    });

    it('should be -6', () => {
        const data = ['-1', '-2', '-3'];
        expect(calculateFrequency(data)).toBe(-6);
    });
});

describe('day 1 part 2 functions', () => {
    it('should be 0', () => {
        const data = ['+1', '-1'];
        expect(findDuplicateFrequency(data)).toBe(0);
    });

    it('should be 10', () => {
        const data = ['+3', '+3', '+4', '-2', '-4'];
        expect(findDuplicateFrequency(data)).toBe(10);
    });

    it('should be 5', () => {
        const data = ['-6', '+3', '+8', '+5', '-6'];
        expect(findDuplicateFrequency(data)).toBe(5);
    });

    it('should be 14', () => {
        const data = ['+7', '+7', '-2', '-7', '-4'];
        expect(findDuplicateFrequency(data)).toBe(14);
    });
});
