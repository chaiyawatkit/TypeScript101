function addInt(n: number, m: number): number;
function addInt(n: string, m: string): string;
function addInt(n: unknown, m: unknown): unknown {
  if (typeof n === 'number' && typeof m === 'number') {
    return 1;
  }
  if (typeof n === 'string' && typeof m === 'string') {
    return 'string 1';
  }
}

console.log(addInt(1, 2));

console.log(addInt('1', '2'));
