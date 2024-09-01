import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * __cn__ stands for Conflicting Class Names, which uses _clsx_ and _tailwind-merge_ libraries to help handle conditional classes and resolve conflicts in a predictable way.
 *
 * - _clsx_: Allows passing class names via objects for conditional logic.
 * - _tailwind-merge_: Ensures your custom classes override defaults when merging.
 *
 * A utility that provides a clean way to handle conditional Tailwind classes in React, avoid conflicts, and simplify your code.
 * @param inputs Classes.
 * @returns HTML class values.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
