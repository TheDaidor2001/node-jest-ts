import { buildLogger } from "../../src/plugins/logger.plugin";

describe("plugins/logger.plugin.ts", () => {
  test("builLogger should return a function logger", () => {
    const logger = buildLogger("test");

    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });
});
