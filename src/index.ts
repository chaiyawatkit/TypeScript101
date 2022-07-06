const merge = <T extends object, U extends object>(obj1: T, obj2: U) => {
  return { ...obj1, ...obj2 };
};

const result = merge({ name: 'kuk' }, { age: 12 });
console.log(result);
