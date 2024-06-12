export function getLink(term: string) {
  return term
    .normalize("NFD")
    .replace(/^(mis|mi)\s/gi, "")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll(" ", "_")
    .toLocaleLowerCase();
}
