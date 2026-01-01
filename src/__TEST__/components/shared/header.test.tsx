import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Header from "../../../components/shared/Header/Header";

describe("Header", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByRole("banner")).toBeVisible();

    expect(screen.getByRole("link", { name: /go to home/i })).toBeVisible();

    expect(screen.getByRole("navigation")).toBeVisible();

    expect(
      screen.getByRole("button", { name: /open navigation menu/i })
    ).toBeVisible();
  });
});
