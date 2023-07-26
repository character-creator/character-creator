import { describe, it } from "vitest";

// All tests within this suite will be run in parallel
describe("suite", () => {
  it("expect to be true", ({ expect }) => {
    expect(true).toBe(true);
  });
});
