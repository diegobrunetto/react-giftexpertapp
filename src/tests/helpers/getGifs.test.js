import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con getGifs Fetch", () => {
  test("debe traer 9 elementos", async () => {
    const gifs = await getGifs("Kobe");

    expect(gifs.length).toBe(10);
  });

  test("debe estar vacio al no tener category", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
