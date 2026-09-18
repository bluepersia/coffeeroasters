import { AppError } from "../core/errorHandling";

type CoffeeData = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export default async function getOurCollection(): Promise<CoffeeData[]> {
  const res = await fetch("/data/our-collection.json");

  if (!res.ok) throw new AppError("Failed to fetch collection");

  const collection: CoffeeData[] = await res.json();

  return collection;
}

export type { CoffeeData };
