import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Props } from "../../../../components/home/OurCollection/types";
import CollectionItem from "../../../../components/home/OurCollection/CollectionItem";

const mockItem: Props = {
  name: "Gran Espresso",
  desc: "Light and flavorful blend with cocoa and black pepper for an intense experience.",
  img: "",
};

describe("Collection item", () => {
  it("should render correctly", () => {
    render(<CollectionItem {...mockItem} />);

    expect(
      screen.getByRole("heading", { name: mockItem.name, level: 3 })
    ).toBeVisible();
    expect(screen.getByText(mockItem.desc)).toBeVisible();
    expect(screen.getByAltText(`Bag of ${mockItem.name}`)).toBeVisible();
  });
});
