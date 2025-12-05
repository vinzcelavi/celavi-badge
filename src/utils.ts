/**
 * Simple className utility - combines class names
 * Compatible with Tailwind CSS
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
