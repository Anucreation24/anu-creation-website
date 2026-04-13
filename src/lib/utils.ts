import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Normalizes an image URL, supporting direct external URLs and local public paths.
 * Returns a fallback placeholder if the URL is missing or invalid.
 */
export function normalizeImageUrl(url: string | null | undefined): string {
  if (!url || typeof url !== "string") return "/placeholders/image-missing.jpg";
  
  const trimmedUrl = url.trim();
  if (trimmedUrl === "") return "/placeholders/image-missing.jpg";

  // Support absolute URLs and local public paths
  if (trimmedUrl.startsWith("http") || trimmedUrl.startsWith("/")) {
    // Automatically upgrade http to https for security and better compatibility
    return trimmedUrl.replace(/^http:\/\//i, 'https://');
  }

  // Fallback if the string doesn't look like a valid path or URL
  return "/placeholders/image-missing.jpg";
}
