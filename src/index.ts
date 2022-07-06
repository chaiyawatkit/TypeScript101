class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  printDetile() {
    console.log('name', this.name, 'age', this.age);
  }
}

let somchai = new Person('somchai', 24);
somchai.age;
somchai.name;
somchai.printDetile();
let somsree = new Person('somsree', 18);
somsree.printDetile();
