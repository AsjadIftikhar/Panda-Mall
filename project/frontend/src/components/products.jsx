import React, {Component} from 'react';

class Products extends Component {
    render() {
        return (
            <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                <main>
                    <div
                        className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
                        <div className="mb-1 w-full">
                            <div className="mb-4">
                                <nav className="flex mb-5" aria-label="Breadcrumb">
                                    <ol className="inline-flex items-center space-x-1 md:space-x-2">
                                        <li className="inline-flex items-center">
                                            <a href="/"
                                               className="text-gray-700 hover:text-gray-900 inline-flex items-center">
                                                <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                                                </svg>
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <div className="flex items-center">
                                                <svg className="w-6 h-6 text-gray-400" fill="currentColor"
                                                     viewBox="0 0 20 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                          clip-rule="evenodd"/>
                                                </svg>
                                                <a href="#"
                                                   className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium">E-commerce</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center">
                                                <svg className="w-6 h-6 text-gray-400" fill="currentColor"
                                                     viewBox="0 0 20 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                          clip-rule="evenodd"/>
                                                </svg>
                                                <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium"
                                                      aria-current="page">Products</span>
                                            </div>
                                        </li>
                                    </ol>
                                </nav>
                                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">All products</h1>
                            </div>
                            <div className="block sm:flex items-center md:divide-x md:divide-gray-100">
                                <form className="sm:pr-3 mb-4 sm:mb-0" action="#" method="GET">
                                    <label for="products-search" class="sr-only">Search</label>
                                    <div className="mt-1 relative sm:w-64 xl:w-96">
                                        <input type="text" name="email" id="products-search"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                               placeholder="Search for products"/>
                                    </div>
                                </form>
                                <div className="flex items-center sm:justify-end w-full">
                                    <div className="hidden md:flex pl-2 space-x-1">
                                        <a href="#"
                                           className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                        </a>
                                        <a href="#"
                                           className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                        </a>
                                        <a href="#"
                                           className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                        </a>
                                        <a href="#"
                                           className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <button type="button" data-modal-toggle="add-product-modal"
                                            className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2 text-center sm:ml-auto">
                                        <svg className="-ml-1 mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                        Add product
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>);
    }
}

export default Products;