import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, beforeEach } from "vitest";
import Hero from "../../../components/home/Hero/Hero";

describe("Hero", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
  });

  it("should render correctly", () => {
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /great coffee made simple/i,
      })
    ).toBeVisible();

    expect(
      screen.getByText(/start your mornings with the world’s best coffees./i)
    ).toBeVisible();

    expect(
      screen.getByRole("link", { name: /create your plan/i })
    ).toBeVisible();

    expect(
      screen.getByRole("img", {
        name: /shimmering golden coffee pot and beans/i,
      })
    ).toBeVisible();
  });

  it('should link to "create your plan" page', () => {
    expect(
      screen.getByRole("link", { name: /create your plan/i })
    ).toHaveAttribute("href", "/create-plan");
  });
});
