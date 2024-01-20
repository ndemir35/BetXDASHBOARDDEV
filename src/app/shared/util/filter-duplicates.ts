export function filterDuplicates(arr: any[], propName: string) {
  return arr.filter(
    (obj, index) =>
      arr.findIndex((item) => item[propName] === obj[propName]) === index
  );
}
