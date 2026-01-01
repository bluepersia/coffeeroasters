import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Layout from "../../../components/shared/Layout/Layout";
import { MemoryRouter } from "react-router-dom";

describe("Main Layout", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    expect(screen.getByTestId("layout")).toBeVisible();
    expect(screen.getByRole("banner")).toBeVisible();
  });
});
