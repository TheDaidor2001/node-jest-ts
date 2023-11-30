import { getUserById } from "../../src/js-foundation/04-arrow";

describe("js-foundations/03-callbacks.ts", () => {
  test("getUserByID should return error if user does not exists", (done) => {
    const id = 10;
    getUserById(id, (error, user) => {
      expect(error).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();

      done();
    });
  });
  test("getUserById should return Jhon Doe", (done) => {
    const id = 1;
    getUserById(id, (error, user) => {
      expect(error).toBeUndefined();
      expect(user).toEqual({
        id: 1,
        name: "John Doe",
      });

      done();
    });
  });
});
