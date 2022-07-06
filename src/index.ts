interface Age {
  age: number;
}

interface Persion {
  name: string;
}

type human = Age & Persion;

let persion: human = {
  age: 14,
  name: 'kuk',
};

console.log(persion);
