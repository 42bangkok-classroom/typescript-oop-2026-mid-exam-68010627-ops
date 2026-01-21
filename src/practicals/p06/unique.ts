export function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // นับจำนวนครั้งของตัวเลขทั้งหมด
  const count = new Map<number, number>();

  for (const n of arr1) {
    count.set(n, (count.get(n) ?? 0) + 1);
  }

  for (const n of arr2) {
    count.set(n, (count.get(n) ?? 0) + 1);
  }

  // unique = ปรากฏครั้งเดียวเท่านั้น
  return [...count.entries()]
    .filter(([_, c]) => c === 1)
    .map(([n]) => n);
}
