import { characters } from "../../src/js-foundation/02-destructuring";

describe("js-foundations/02-desestructuring.ts", () => {
  test("characters should contain flash, superman", () => {
    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
  });

  test("first character should be flash and second superman", () => {
    const [first, second] = characters;
    expect(first).toBe("Flash");
    expect(second).toBe("Superman");
  });
});
