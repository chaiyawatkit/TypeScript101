const formatFloat = (num: string | number) => {
  switch (typeof num) {
    case 'string':
      return parseFloat(num).toFixed(2);
    case 'number':
      return num.toFixed(2);
    default:
      return num;
  }
};
