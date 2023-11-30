import { buildMakePerson } from "../../src/js-foundation/05-factory";

const getUUID = () => "1234";
const getAge = () => 22;

describe("js-foundations/05-factory.ts", () => {
  test("buildMakePerson should return a function", () => {
    expect(typeof buildMakePerson).toBe("function");
  });

  test("make person should return a person", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    const jhonDoe = makePerson({ name: "Jhon Doe", birthdate: "2001-05-15" });
    expect(jhonDoe).toEqual({
      id: "1234",
      name: "Jhon Doe",
      birthdate: "2001-05-15",
      age: 22,
    });
  });
});
