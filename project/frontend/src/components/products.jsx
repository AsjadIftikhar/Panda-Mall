import React, {Component} from 'react';
import Pagination from "./commons/pagination";
import {paginate} from "../utils/paginate";
import Search from "./commons/search";

class Products extends Component {
    state = {
        pageSize: 15,
        currentPage: 1,

        selectedItemToDelete: 0,

        product: {
            "SKU": "",
            "Product_Title": "",
            "Color": "",
            "Selling_Price": "",
            "Image_Url": "",
        },

        searchQuery: "",

    };
    handlePageChange = page => {
        this.setState({currentPage: page})
    }

    handleFormChange = e => {
        const product = {...this.state.product};
        product[e.currentTarget.name] = e.currentTarget.value;
        this.setState({product});
    }
    handleAddProduct = e => {
        e.preventDefault();
        this.props.onAdd((this.state.product))
    }

    handleEditProduct = e => {
        e.preventDefault();

        this.props.onEdit((this.state.product))
    }
    handleSearch = query => {
        this.setState({searchQuery: query, currentPage: 1})
    }


    render() {
        const {pageSize, currentPage, product, searchQuery} = this.state;
        if (this.props.products.length === 0) return <p>No Products Found</p>

        let products = this.props.products
        if (searchQuery) {
            products = this.props.products.filter(m =>
                m.Product_Title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        } else {
            products = paginate(this.props.products, currentPage, pageSize);
        }


        return (
            <div className="mt-4 border border-slate-100">
                <div className="flex flex-col">
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle dark:bg-gray-800">
                            {/*Delete Modal*/}
                            <div
                                className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full"
                                id="popup-modal" aria-hidden="true">
                                <div className="relative px-4 w-full max-w-md h-full md:h-auto">

                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                        <div className="flex justify-end p-2">
                                            <button type="button"
                                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                                    data-modal-toggle="popup-modal">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                          clip-rule="evenodd"/>
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="p-6 pt-0 text-center">
                                            <svg className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                                                 fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are
                                                you sure you want to delete this product?</h3>
                                            <button onClick={
                                                () => {
                                                    this.props.onDelete(this.state.selectedItemToDelete)
                                                }
                                            }
                                                    data-modal-toggle="popup-modal" type="button"
                                                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                                Yes, I'm sure
                                            </button>
                                            <button data-modal-toggle="popup-modal" type="button"
                                                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">No,
                                                cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Delete Modal End*/}

                            {/*Add Product Form Modal*/}
                            <div id="products-add-modal" aria-hidden="true"
                                 className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">

                                <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">

                                    <div className="bg-white rounded-lg shadow relative">

                                        <div className="flex items-start justify-between p-5 border-b rounded-t">
                                            <h3 className="text-xl font-semibold">
                                                Add a new product
                                            </h3>
                                            <button type="button"
                                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                                    data-modal-toggle="products-add-modal">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                          clip-rule="evenodd"/>
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="p-6 space-y-6">
                                            <form onSubmit={this.handleAddProduct}>
                                                <div className="grid grid-cols-6 gap-6">
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="product-name"
                                                               className="text-sm font-medium text-gray-900 block mb-2">SKU</label>
                                                        <input type="text"
                                                               name="SKU"
                                                               id="SKU"
                                                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                               placeholder="FS1297SF"
                                                               value={product.SKU}
                                                               onChange={this.handleFormChange}
                                                               required=""/>
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="category"
                                                               className="text-sm font-medium text-gray-900 block mb-2">Title</label>
                                                        <input type="text"
                                                               name="Product_Title"
                                                               id="Product_Title"
                                                               value={product.Product_Title}
                                                               onChange={this.handleFormChange}
                                                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                               placeholder="Plain Brown Smart Fit Shirt"
                                                               required=""/>
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="brand"
                                                               className="text-sm font-medium text-gray-900 block mb-2">Color</label>
                                                        <input type="text"
                                                               name="Color"
                                                               id="Color"
                                                               value={product.Color}
                                                               onChange={this.handleFormChange}
                                                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                               placeholder="Brown"
                                                               required=""/>
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="price"
                                                               className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                                                        <input type="number"
                                                               name="Selling_Price"
                                                               id="Selling_Price"
                                                               value={product.Selling_Price}
                                                               onChange={this.handleFormChange}
                                                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                               placeholder="2300"
                                                               required=""/>
                                                    </div>
                                                    <div className="col-span-full">
                                                        <label htmlFor="product-details"
                                                               className="text-sm font-medium text-gray-900 block mb-2">Image
                                                            URL</label>
                                                        <textarea id="Image_Url"
                                                                  rows="4"
                                                                  name="Image_Url"
                                                                  value={product.Image_Url}
                                                                  onChange={this.handleFormChange}
                                                                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                                                                  placeholder="https://uniworthdress.com/uploads/product/webp/FS1297SF..webp"/>
                                                    </div>
                                                </div>
                                                <div className="p-6 border-t border-gray-200 rounded-b">
                                                    <button
                                                        className="flex text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                                        type="submit"
                                                        data-modal-toggle="products-add-modal">
                                                        Add product
                                                    </button>
                                                </div>
                                            </form>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            {/*Add Product Form Modal End*/}

                            {/*Edit Product Form Modal*/}
                            <div id="products-edit-modal" aria-hidden="true"
                                 className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">

                                <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">

                                    <div className="bg-white rounded-lg shadow relative">

                                        <div className="flex items-start justify-between p-5 border-b rounded-t">
                                            <h3 className="text-xl font-semibold">
                                                Edit Selected Product
                                            </h3>
                                            <button type="button"
                                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                                    data-modal-toggle="products-edit-modal">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                          clip-rule="evenodd"/>
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="p-6 space-y-6">
                                            <form onSubmit={this.handleEditProduct}>
                                                <div className="grid grid-cols-6 gap-6">
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="product-name"
                                                               className="text-sm font-medium text-gray-900 block mb-2">SKU</label>
                                                        <input type="text"
                                                               name="SKU"
                                                               id="SKU"
                                                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                               placeholder="FS1297SF"
                                                               value={product.SKU}
                                                               onChange={this.handleFormChange}
                                                               required=""/>
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="category"
                                                               className="text-sm font-medium text-gray-900 block mb-2">Title</label>
                                                        <input type="text"
                                                               name="Product_Title"
                                                               id="Product_Title"
                                                               value={product.Product_Title}
                                                               onChange={this.handleFormChange}
                                                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                               placeholder="Plain Brown Smart Fit Shirt"
                                                               required=""/>
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="brand"
                                                               className="text-sm font-medium text-gray-900 block mb-2">Color</label>
                                                        <input type="text"
                                                               name="Color"
                                                               id="Color"
                                                               value={product.Color}
                                                               onChange={this.handleFormChange}
                                                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                               placeholder="Brown"
                                                               required=""/>
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="price"
                                                               className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                                                        <input type="number"
                                                               name="Selling_Price"
                                                               id="Selling_Price"
                                                               value={product.Selling_Price}
                                                               onChange={this.handleFormChange}
                                                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                               placeholder="2300"
                                                               required=""/>
                                                    </div>
                                                    <div className="col-span-full">
                                                        <label htmlFor="product-details"
                                                               className="text-sm font-medium text-gray-900 block mb-2">Image
                                                            URL</label>
                                                        <textarea id="Image_Url"
                                                                  rows="4"
                                                                  name="Image_Url"
                                                                  value={product.Image_Url}
                                                                  onChange={this.handleFormChange}
                                                                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                                                                  placeholder="https://uniworthdress.com/uploads/product/webp/FS1297SF..webp"/>
                                                    </div>
                                                </div>
                                                <div className="p-6 border-t border-gray-200 rounded-b">
                                                    <button
                                                        className="flex text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                                        type="submit"
                                                        data-modal-toggle="products-edit-modal">
                                                        Edit product
                                                    </button>
                                                </div>
                                            </form>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            {/*Edit Product Form Modal End*/}

                            <div className="flex p-4">
                                <label htmlFor="table-search" className="sr-only">Search</label>
                                <div className="relative mt-1">
                                    <div
                                        className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </div>
                                    <Search value={searchQuery} onChange={this.handleSearch}/>
                                </div>
                                <div className="flex items-center sm:justify-end w-full">
                                    <button type="button" data-modal-toggle="products-add-modal"
                                            className="flex text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">

                                        <svg class="-ml-1 mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                        Add Product
                                    </button>

                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                    <thead
                                        className="bg-gradient-to-l from-gray-600 via-gray-700 to-gray-800 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-search-all" type="checkbox"
                                                       className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                <label htmlFor="checkbox-search-all"
                                                       className="sr-only">checkbox</label>
                                            </div>
                                        </th>
                                        <th scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-slate-50 uppercase dark:text-gray-400">
                                            Image
                                        </th>
                                        <th scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-slate-50 uppercase dark:text-gray-400">
                                            SKU
                                        </th>
                                        <th scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-slate-50 uppercase dark:text-gray-400">
                                            Product Title
                                        </th>
                                        <th scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-slate-50 uppercase dark:text-gray-400">
                                            Price
                                        </th>
                                        <th scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-slate-50 uppercase dark:text-gray-400">
                                            Color
                                        </th>
                                        <th scope="col" className="p-4">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody
                                        className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    {products.map(product => (
                                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td className="p-4 w-4">
                                                <div className="flex items-center">
                                                    <input id="checkbox-search-1" type="checkbox"
                                                           className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                    <label htmlFor="checkbox-search-1"
                                                           className="sr-only">checkbox</label>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <img className="w-10 h-10 rounded-full"
                                                     src={product.Image_Url}/>
                                            </td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {product.SKU}
                                            </td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                {product.Product_Title}
                                            </td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Rs.{product.Selling_Price}/-</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.Color}</td>
                                            <td className="p-4 whitespace-nowrap space-x-4">

                                                <button type="button" data-modal-toggle="products-edit-modal"
                                                        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 shadow shadow-teal-500/50 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
                                                        onClick={() => {
                                                            this.setState({product})
                                                        }
                                                        }
                                                >
                                                    <svg className="mr-2 h-5 w-5" fill="currentColor"
                                                         viewBox="0 0 20 20"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
                                                        <path fill-rule="evenodd"
                                                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                              clip-rule="evenodd"/>
                                                    </svg>
                                                    Edit item
                                                </button>
                                                <button onClick={() => {
                                                    this.setState({selectedItemToDelete: product.SKU})
                                                }
                                                }
                                                        type="button" data-modal-toggle="popup-modal"
                                                        className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 shadow shadow-red-500/50 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                                    <svg className="mr-2 h-5 w-5" fill="currentColor"
                                                         viewBox="0 0 20 20"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                              clip-rule="evenodd"/>
                                                    </svg>
                                                    Delete item
                                                </button>

                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <Pagination itemsCount={this.props.products.length}
                                            pageSize={pageSize}
                                            currentPage={currentPage}
                                            onPageChange={this.handlePageChange}/>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Products;