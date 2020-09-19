import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    const setCategories = () => {
    }
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
});
