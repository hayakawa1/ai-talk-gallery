import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchPageTitle(url: string): Promise<string> {
  try {
    const response = await fetch(url)
    const html = await response.text()
    const titleMatch = html.match(/<title>(.*?)<\/title>/)
    return titleMatch ? titleMatch[1] : "Untitled Chat"
  } catch (error) {
    console.error("Error fetching title:", error)
    return "Untitled Chat"
  }
} 