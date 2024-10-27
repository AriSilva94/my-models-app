export function formatNameForUrl(name: string): string {
  return name
    .trim() // Remove espaços no início e no final
    .toLowerCase() // Converte para minúsculas
    .replace(/\s+/g, "-") // Substitui um ou mais espaços por um único hífen
    .replace(/--+/g, "-"); // Substitui múltiplos hífens por um único hífen
}
