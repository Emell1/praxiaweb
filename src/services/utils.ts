export function convertToSlug(title: string): string {
  return title
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing spaces
    .replace(/á|à|ä|â/g, 'a') // Replace accented characters with their unaccented equivalents
    .replace(/é|è|ë|ê/g, 'e')
    .replace(/í|ì|ï|î/g, 'i')
    .replace(/ó|ò|ö|ô/g, 'o')
    .replace(/ú|ù|ü|û/g, 'u')
    .replace(/ñ/g, 'n') // Replace 'ñ' with 'n'
    .replace(/[^a-z0-9\s-]/g, '') // Remove any non-alphanumeric character except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace consecutive hyphens with a single hyphen
}
