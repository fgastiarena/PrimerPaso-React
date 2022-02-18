import { shallow } from 'enzyme';
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import React from 'react';

describe('Pruebas en PrimeraApp', () => {

            // test('Debe mostrar el msj "Hola, soy Goku"', () => {
            //         const saludo = 'Hola, soy Goku';
            //         const { getByText } = render( < PrimeraApp saludo = { saludo }/> );
            //             expect(getByText(saludo)).toBeInTheDocument();
            //         })

            test('debe de mostrar PrimeraApp correctamente', () => {

                    const saludo = 'Hola, soy Goku';
                    const wrapper = shallow( < PrimeraApp saludo = { saludo }
                        />);

                        expect(wrapper).toMatchSnapshot();

                    });


                test('Debe mostrar el subtitulo enviado por props', () => {

                    const saludo = 'Hola, soy Goku';
                    const subtitulo = 'Soy un subtitulo';


                    const wrapper = shallow( <
                        PrimeraApp saludo = { saludo }
                        subtitulo = { subtitulo }
                        />
                    );

                    const textoParrafo = wrapper.find('p').text();
                    expect(textoParrafo).toBe(subtitulo);
                })

            })