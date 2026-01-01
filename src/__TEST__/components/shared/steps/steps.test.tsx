import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Steps from "../../../../components/shared/Steps/Steps";

describe("Steps", () => {
  it("should render correctly", () => {
    render(<Steps />);

    expect(
      screen.getByRole("heading", { level: 3, name: /pick your coffee/i })
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { level: 3, name: /choose the frequency/i })
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { level: 3, name: /receive and enjoy!/i })
    ).toBeVisible();
  });
});
