import collectionData from "../data/collection.json";
import type { CollectionItem } from "../data/collection.types";

async function getCollection(): Promise<CollectionItem[]> {
  return collectionData;
}

export { getCollection };
