import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WhyChooseUs from "../../../../components/home/WhyChooseUs/WhyChooseUs";

describe("Why Choose Us", () => {
  it("should render correctly", () => {
    render(<WhyChooseUs />);

    expect(
      screen.getByRole("heading", { level: 2, name: /why choose us/i })
    ).toBeVisible();

    expect(
      screen.getByRole("heading", { level: 3, name: /best quality/i })
    ).toBeVisible();

    expect(
      screen.getByRole("heading", { level: 3, name: /exclusive benefits/i })
    ).toBeVisible();

    expect(
      screen.getByRole("heading", { level: 3, name: /free shipping/i })
    ).toBeVisible();
  });
});
