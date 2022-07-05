const uppercaseFirstLetter = (str: string | null | undefined) => {
  if (typeof str === 'string') {
    return str[0].toLocaleUpperCase();
  }
  return 'null';
};
let str = uppercaseFirstLetter(null);
console.log(str);
