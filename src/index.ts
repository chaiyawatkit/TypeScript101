type Person = {
  name: string;
  age: number;
};

type PersonSub = {
  [K in keyof Person as `${K}Changed`]: (key: K, value: Person[K]) => void;
};
