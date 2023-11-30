import { getAge } from "../../src/plugins/get-age.plugin";

describe("plugins/getAge.plugin.ts", () => {
  test("getAge() should return the age of a person", () => {
    const birthDay = "2001-05-15";
    const age = getAge(birthDay);

    expect(typeof age).toBe("number");
  });

  test("getAge() should return current age", () => {
    const birthDay = "2001-05-15";
    const age = getAge(birthDay);

    const culcalatedDate =
      new Date().getFullYear() - new Date(birthDay).getFullYear();
    expect(age).toBe(culcalatedDate);
  });

  test("getAge should return 0 years", () => {
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1995);

    const birthDay = "1995-10-21";
    const age = getAge(birthDay);

    expect(age).toBe(0);
  });
});
