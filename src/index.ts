interface Person {
  name: string;
  age: number;
  address: string;
}
type PersonKeys = keyof Person;
type PersonAgeType = Person['age'];
type PersonValues = Person[keyof Person];

let test: Person = {
  name: 'kuk',
  age: 2,
  address: '192/142 bkk',
};

const printValue = (key: keyof Person) => {
  console.log(test[key]);
};

printValue('name');
