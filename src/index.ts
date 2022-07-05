const fixed = (num: number) => {
  return num.toFixed(2);
};

let num: unknown = '10.511119';
num = 10.511119;
num = false;

if (typeof num === 'number') {
  console.log(fixed(num));
}
