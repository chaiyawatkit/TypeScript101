const last = <T>(arr: T[], count: number) => {
  return arr.slice(arr.length - count);
};
last<number>([1, 2, 3, 4, 5], 3); //[3,4,5]

last<string>(['A', 'B', 'C', 'D', 'E'], 2); //[D,E]

class Stack<T> {
  private items: T[] = [];

  push(items: T) {
    this.items.push(items);
  }
  pop(): T | undefined {
    return this.items.pop();
  }
}

const s = new Stack<number>();
s.push(1);
s.push(2);
s.push(3);

s.pop();

console.log(s);
