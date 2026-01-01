import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import OurCollection from "../../../../components/home/OurCollection/OurCollection";
import * as api from "../../../../components/home/OurCollection/services";
import { collection } from "../../../../components/home/OurCollection/constants";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../../react-query";
describe("Our Collection", () => {
  vi.spyOn(api, "getOurCollection").mockResolvedValue(collection);

  it("should render correctly", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <OurCollection />
      </QueryClientProvider>
    );

    expect(
      screen.getByRole("heading", { name: /our collection/i, level: 2 })
    ).toBeVisible();

    for (const item of collection) {
      expect(
        await screen.findByRole("heading", { name: item.name, level: 3 })
      ).toBeVisible();
    }
  });
});
