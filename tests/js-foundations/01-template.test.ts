import { emailTemplate } from "../../src/js-foundation/01-template";

describe("js-foundations/01-template.ts", () => {
  test("emailTemplate should contain a reading", () => {
    expect(emailTemplate).toContain("Hi, ");
  });

  test("EmailTemplate should contain {{ name }} and {{ orderId }} ", () => {
    expect(emailTemplate).toContain("{{name}}");
    expect(emailTemplate).toContain("{{orderId}}");
  });
});
