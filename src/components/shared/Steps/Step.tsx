import type { StepProps } from "./types";

export default function Step(props: StepProps) {
  return (
    <li>
      <span>0{props.num}</span>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </li>
  );
}
