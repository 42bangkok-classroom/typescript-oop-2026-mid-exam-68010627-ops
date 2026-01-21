function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  const combined = [...arr1, ...arr2];
  const result: number[] = [];

  for (const num of combined) {
    const count =
      combined.filter(n => n === num).length;

    if (count === 1) {
      result.push(num);
    }
  }

  return result;
}