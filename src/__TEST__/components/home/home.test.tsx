import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../../../components/home/Home";
import { MemoryRouter } from "react-router-dom";

describe("Home", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(
      screen
        .getByRole("heading", { level: 1, name: /great coffee made simple/i })
        .closest("section")
    ).toBeVisible();
  });
});
