export function trimText(text: string, maxLength: number = 30): string {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}
