interface Person {
  fName: string;
  lName: string;
  middleName?: string;
  readonly gender: 'Male' | 'Female';
}

let kuk: Person = {
  fName: 'kuk',
  lName: 'kik',
  gender: 'Male',
};
