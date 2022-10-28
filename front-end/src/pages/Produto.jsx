import { useState, useEffect } from "react";

import { IoIosArrowDropleft } from "react-icons/io";

import { Link } from "react-router-dom";

import { Card } from "../components/Card";

import { useParams } from "react-router-dom";

import ProductService from "../services/product.service";

export function Produto() {

    const { idProduct } = useParams();

    const [ currentProduct, setCurrentProduct ] = useState();

    useEffect(() => {

        ProductService.getById(idProduct)
            .then(response => setCurrentProduct(response));
    },[] )
    
    return (
        <>
            <main className="container m-auto text-center font-medium my-2 max-w-2xl border shadow-md rounded-xl">
                <section className="flex-wrap ">
                    <div className="w-60 my-2 mx-3">
                        <Link to='/'>
                        <IoIosArrowDropleft
                        className="fill-green-600 text-3xl cursor-pointer"
                        /> 
                        </Link>                  
                    </div>
                    <div>
                        <img className="h-auto w-1/2 m-auto" src={currentProduct?.image_product} alt={currentProduct?.name} />
                    </div>
                        <div className="m-auto py-4 w-3/4 flex flex-wrap justify-between">
                            <div className="text-left w-40">
                                <p>{currentProduct?.name} {currentProduct?.type_unit}</p>
                                <p><strong>R$ {currentProduct?.price}</strong></p>
                                <label htmlFor="quantidade">qtd : </label>
                                <input  className="shadow appearance-none border rounded w-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" name="quantidade"
                                type="number"
                                defaultValue={1}
                                />
                            </div>
                            <form action="#" className="text-sm self-end text-left w-40">
                                <p>Calcule seu frete</p>
                                <p>CEP:</p>
                                <input
                                class="shadow appearance-none border rounded w-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="00000-000"
                                />
                                <button class=" bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline m-1"
                                type="button"
                                >
                                OK
                                </button>
                            </form>
                        </div>
                            <button class="w-3/4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline m-5"
                            type="button"
                            >
                                Adicionar ao carrinho
                            </button>
                    <hr className="my-2"/>
                    <div className="m-auto my-3 py-5 text-left w-3/4">
                        <h3 className="text-xl font-medium">Descrição</h3>
                        <p className="font-medium">
                        {currentProduct?.description}
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}