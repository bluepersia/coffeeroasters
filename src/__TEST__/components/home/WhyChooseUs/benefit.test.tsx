import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Benefit from "../../../../components/home/WhyChooseUs/Benefit";

describe("Benefit", () => {
  it("should render correctly", () => {
    render(<Benefit title="Best quality" desc="Discover an endless variety" />);

    expect(
      screen.getByRole("heading", { level: 3, name: /best quality/i })
    ).toBeVisible();
    expect(screen.getByText(/discover an endless variety/i)).toBeVisible();
  });
});
