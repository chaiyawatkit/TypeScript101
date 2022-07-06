interface Human {
  name: string;
  talk: () => void;
}

interface Cat {
  name: string;
  walk: () => void;
}

const person: Human | Cat = {
  name: 'kuk',
  talk() {
    console.log('test');
  },
};

person.talk();
