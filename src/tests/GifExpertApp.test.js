import React from "react";
import "@testing-library/jest-dom";

import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Pruebas en GifExpertApp", () => {
  test("debe mostrar correctamente el componente", () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrat la lista de categorias", () => {
    const categories = ["Kobe", "Jordan", "Lebron"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
  