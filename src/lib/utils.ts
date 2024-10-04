import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const socialNetwork = {
  github: "https://github.com/blaze380?",
  linkedIn: "",
} as const;


export const ICONS = {
  size: 25,
}