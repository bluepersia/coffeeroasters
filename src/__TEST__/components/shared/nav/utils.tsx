import { render, screen } from "@testing-library/react";
import { beforeEach, it, expect, describe } from "vitest";
import { NAV_LINKS } from "./constants";
import { MemoryRouter } from "react-router-dom";

export function navTests(name: string, node: React.ReactNode) {
  describe(name, () => {
    let nav: HTMLElement;
    let links: HTMLElement[];

    beforeEach(() => {
      render(<MemoryRouter>{node}</MemoryRouter>);

      nav = screen.getByRole("navigation");
      links = NAV_LINKS.map((item) =>
        screen.getByRole("link", { name: item.text })
      );
    });

    it("should render correctly", () => {
      expect(nav).toBeVisible();

      for (const link of links) {
        expect(link).toBeVisible();
      }
    });

    it("should link to the correct pages", () => {
      for (const [index, link] of links.entries()) {
        expect(link).toHaveAttribute("href", NAV_LINKS[index].to);
      }
    });
  });
}
