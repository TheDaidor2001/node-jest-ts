import { getUUID } from "../../src/plugins/get-id.plugin";

describe("plugins/get-id.plugin.ts", () => {
  test("should return and UUID ", () => {
    const uuid = getUUID();
    expect(typeof uuid).toBe("string");
    expect(uuid.length).toBe(36);
  });
});
