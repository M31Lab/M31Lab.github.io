import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function `cn` combines class names using clsx and merges Tailwind CSS classes.
 * It helps to conditionally join class names and handle Tailwind class conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
