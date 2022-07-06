interface Triangle {
  type: 'triangle';
  base: number;
  height: number;
}
interface Regtangle {
  type: 'regtangle';
  width: number;
  height: number;
}

type shape = Triangle | Regtangle;

const area = (s: shape) => {
  switch (s.type) {
    case 'triangle':
      return 0.5 * s.height * s.base;
    case 'regtangle':
      return s.width * s.height;
    default:
      break;
  }
};

console.log(area({ height: 5, width: 5, type: 'regtangle' }));
