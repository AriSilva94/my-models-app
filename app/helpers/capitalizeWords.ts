export function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/(?:^|\s|-)([a-z])/g, (match) => match.toUpperCase());
}
