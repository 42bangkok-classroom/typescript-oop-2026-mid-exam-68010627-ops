const comment = "TypeScript is a strongly typed programming language"

function shortenComment(comment: string): string {
  if (!comment) return "";

  const words = comment.split(" ");
  const filtered = words.filter(
    word => word.length >= 5 && word.length <= 10
  );

  return filtered.join(" ");
}