export function getFriendlyDate(date: string) {
  const publishedAtDate = new Date(date);

  return publishedAtDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
