type varicalAlignmaent = 'top' | 'middle' | 'bottom';
type horizontalAlignmaent = 'top' | 'middle' | 'bottom';

type Alignmaent = `${varicalAlignmaent} - ${horizontalAlignmaent}`;

const alignBox = (aligment: Alignmaent) => {};

alignBox('middle - bottom');
