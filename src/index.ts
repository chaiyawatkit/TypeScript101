const num1 = [1, 2, 3];
const num2: unknown[] = ['hello', 2, false];
const num3: Array<number> = [4, 5, 6];

num3[0] = 1;
const num4: readonly number[] = [1, 2, 3];
// num4[0] = 10;

const num5: ReadonlyArray<number> = [4, 5, 6];
// num5[0] = 10;

const num6 = num5 as number[];
const num7 = <number[]>num5;
