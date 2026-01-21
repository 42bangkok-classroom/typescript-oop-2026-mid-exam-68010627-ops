export function shortenComment(comment: string): string {
  // แยกคำด้วยช่องว่าง
  const words = comment.split(" ");

  // กรองคำที่มีความยาว 5–10 (inclusive)
  const filtered = words.filter(
    (word) => word.length >= 5 && word.length <= 10
  );

  // ถ้าไม่มีคำที่ผ่านเลย
  if (filtered.length === 0) {
    return "";
  }

  // รวมกลับเป็น string
  return filtered.join(" ");
}
