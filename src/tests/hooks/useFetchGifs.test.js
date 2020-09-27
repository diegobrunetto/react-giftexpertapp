import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("pruebas en el hook useFetchGifs", () => {
  test("debe retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("kobe")
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("debe retornar un array de imagenes y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("kobe")
    );

    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(9);
    expect(loading).toBe(false);
  });
});
