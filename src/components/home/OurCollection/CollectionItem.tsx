import type { Props } from "./types";

export default function CollectionItem(props: Props) {
  return (
    <article>
      <img src={props.img} alt={`Bag of ${props.name}`} />
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
    </article>
  );
}
