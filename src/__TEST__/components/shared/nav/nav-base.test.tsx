import { describe } from "vitest";
import { navTests } from "./utils";
import NavBase from "../../../../components/shared/Nav/NavBase";
import MainNav from "../../../../components/shared/Nav/MainNav";

describe("Nav", () => {
  navTests("Base", <NavBase />);
  navTests("Main", <MainNav />);
});
