import type { BenefitProps } from "./type";

export default function Benefit(props: BenefitProps) {
  return (
    <div>
      <img src={props.icon} alt="" />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}
