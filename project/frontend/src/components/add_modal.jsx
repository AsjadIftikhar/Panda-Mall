import React from 'react';

const AddModal = ({setModalOn, handleAdd, handleFormChange, product}) => {

    const handleOKClick = (e) => {
        e.preventDefault()
        handleAdd()
        setModalOn(false)
    }
    const handleCancelClick = () => {
        setModalOn(false)
    }

    return (
        <div className="fixed z-50 inset-0 flex justify-center items-center">
            <div className="w-3/5">
                <div className="px-8 bg-white border border-teal-500 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold">
                        Add a new product
                    </h3>

                    <div className="p-4 space-y-4">
                        <form onSubmit={handleOKClick}>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">SKU</label>
                                    <input type="text"
                                           name="sku"
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="FS1297SF"
                                           value={product.sku}
                                           onChange={handleFormChange}
                                           required=""/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Title</label>
                                    <input type="text"
                                           name="title"
                                           value={product.title}
                                           onChange={handleFormChange}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Plain Brown Smart Fit Shirt"
                                           required=""/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Fabric</label>
                                    <input type="text"
                                           name="fabric"
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                                           sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block
                                           w-full p-2.5"
                                           placeholder="80% Polyester 20% Cotton"
                                           value={product.fabric}
                                           onChange={handleFormChange}
                                           required=""/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Fit</label>
                                    <input type="text"
                                           name="fit"
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                                           sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block
                                            w-full p-2.5"
                                           placeholder="Regular"
                                           value={product.fit}
                                           onChange={handleFormChange}
                                           required=""/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Collar Type</label>
                                    <input type="text"
                                           name="collars_type"
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                                           sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block
                                            w-full p-2.5"
                                           placeholder="French Collar"
                                           value={product.collars_type}
                                           onChange={handleFormChange}
                                           required=""/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Sleeves</label>
                                    <input type="text"
                                           name="sleeves"
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                                           sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block
                                           w-full p-2.5"
                                           placeholder="Half Sleeves"
                                           value={product.sleeves}
                                           onChange={handleFormChange}
                                           required=""/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Category</label>
                                    <input type="text"
                                           name="category"
                                           value={product.category}
                                           onChange={handleFormChange}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                                           sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block
                                            w-full p-2.5"
                                           placeholder="Shirt"
                                           required=""/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Color</label>
                                    <input type="text"
                                           name="color"
                                           value={product.color}
                                           onChange={handleFormChange}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                                           sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block
                                            w-full p-2.5"
                                           placeholder="Brown, Blue, Black"
                                           required=""/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Size</label>
                                    <input type="text"
                                           name="size"
                                           value={product.size}
                                           onChange={handleFormChange}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                                            sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block
                                            w-full p-2.5"
                                           placeholder="15.5, 16.5, S, M, L"
                                           required=""/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                                    <input type="number"
                                           name="price"
                                           value={product.price}
                                           onChange={handleFormChange}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                                           sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block
                                           w-full p-2.5"
                                           placeholder="2300"
                                           required=""/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Discount</label>
                                    <input type="number"
                                           name="discount"
                                           value={product.discount}
                                           onChange={handleFormChange}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                                           sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block
                                           w-full p-2.5"
                                           placeholder="10%"
                                           required=""/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Quantity</label>
                                    <input type="number"
                                           name="quantity"
                                           value={product.quantity}
                                           onChange={handleFormChange}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                                           sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block
                                           w-full p-2.5"
                                           placeholder="50"
                                           required=""/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Image URL</label>
                                    <textarea id="Image_Url"
                                              rows="3"
                                              name="image_url"
                                              value={product.image_url}
                                              onChange={handleFormChange}
                                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm r
                                              ounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                                              placeholder="https://uniworthdress.com/uploads/product/webp/FS1297SF..webp"/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Product URL</label>
                                    <textarea rows="3"
                                              name="product_url"
                                              value={product.product_url}
                                              onChange={handleFormChange}
                                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
                                              rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                                              placeholder="https://uniworthshop.com/product/blue-self-striped-smart-fit-half-sleeve-formal-shirt-fs2015h"/>
                                </div>

                            </div>
                            <div className="flex mt-16 space-x-4">
                                <button
                                    className="flex text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700
                                    hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800
                                    shadow shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium
                                    rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                    type="submit"
                                    data-modal-toggle="products-add-modal">
                                    Add product
                                </button>
                                <button type="button"
                                        onClick={handleCancelClick}
                                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none
                                    focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5
                                    hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500
                                    dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default AddModal;