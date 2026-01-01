import { useQuery } from "@tanstack/react-query";
import { getOurCollection } from "./services";
import CollectionItem from "./CollectionItem";

export default function OurCollection() {
  const { data } = useQuery({
    queryKey: ["collection"],
    queryFn: getOurCollection,
  });

  return (
    <section>
      <h2>Our Collection</h2>
      {data?.map((item) => (
        <CollectionItem {...item} />
      ))}
    </section>
  );
}
