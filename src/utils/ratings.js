export function genRatings(difficulty, star, outline) {
  switch (difficulty) {
    case "easy":
      return new Array(5).fill(star, 0, 1).fill(outline, 1, 5);
    case "medium":
      return new Array(5).fill(star, 0, 2).fill(outline, 2, 5);
    case "hard":
      return new Array(5).fill(star, 0, 3).fill(outline, 3, 5);
    default:
      return null;
  }
}
