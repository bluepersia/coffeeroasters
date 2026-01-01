import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Step from "../../../../../components/shared/Main/Steps/Step";

const mockStep = {
  num: 1,
  title: "Pick your coffee",
  desc: "Select from our evolving range of artisan coffees.",
};
describe("Step", () => {
  it("should render correctly", () => {
    render(<Step {...mockStep} />);

    const heading = screen.getByRole("heading", {
      level: 3,
      name: mockStep.title,
    });
    expect(heading).toBeVisible();
    expect(screen.getByText(`0${mockStep.num}`)).toBeVisible();
    expect(screen.getByText(mockStep.desc)).toBeVisible();
  });
});
