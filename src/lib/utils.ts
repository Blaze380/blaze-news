import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { NewsApiResponse } from '@/lib/types/NewsApiResponse';
export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const socialNetwork = {
  github: "https://github.com/blaze380?",
  linkedIn: "",
} as const;

export const newsCategories = {
  Geral: "general",
  Tecnologia: "technology",
  Politica: "politics",
  Ciencia: "science",
  Desporto: "sports",
  Negocio: "business",
  Entretenimento: 'entertainment',
  Saude: "health",
} as const
export type NewsCategories = (typeof newsCategories)[keyof typeof newsCategories];

export const ICONS = {
  size: 25,
}
export async function getNews (category: NewsCategories, pageSize: number, page: number, search?: string,apiKey?:string): Promise<NewsApiResponse> {
  try {
    const url: string = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey ? apiKey: process.env.NEWSAPI_KEY }${ search ? `&q=${ search }` : '' }&category=${ category }&pageSize=${ pageSize }&page=${ page }`
    const result: Response = await fetch(url);
    return await result.json();
  } catch (error) {
    console.log(error);
    throw new Error("Preguisa ahhh")
  }

}

