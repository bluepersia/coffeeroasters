import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, beforeEach } from "vitest";
import SiteLogo from "../../../components/shared/SiteLogo/SiteLogo";

describe("Site Logo", () => {
  let siteLogo: HTMLElement;

  beforeEach(() => {
    render(
      <MemoryRouter>
        <SiteLogo />
      </MemoryRouter>
    );

    siteLogo = screen.getByRole("link", { name: /go to home/i });
  });
  it("should render correctly", () => {
    expect(siteLogo).toBeVisible();
  });

  it("should link to home", () => {
    expect(siteLogo).toHaveAttribute("href", "/");
  });
});
