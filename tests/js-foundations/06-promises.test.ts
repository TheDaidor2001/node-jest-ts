import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("js-foundations/06-promises.ts", () => {
  test("getPokemonById should return a pokemon", async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);
    expect(pokemonName).toBe("bulbasaur");
  });

  test("should return an error if pokemon does not exists", async () => {
    const pokemonId = 1000000000;
    try {
      await getPokemonById(pokemonId);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Pokemon not found whit id ${pokemonId}`);
    }
  });
});
