import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../../../components/home/Home";
import { MemoryRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../react-query";

describe("Home", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(
      screen
        .getByRole("heading", { level: 1, name: /great coffee made simple/i })
        .closest("section")
    ).toBeVisible();
  });
});
