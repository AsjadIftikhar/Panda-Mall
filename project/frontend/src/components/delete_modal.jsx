import React from 'react';

const DeleteModal = ({ setModalOn, handleDelete }) => {
    const handleOKClick = () => {
        handleDelete()
        setModalOn(false)
    }
    const handleCancelClick = () => {
        setModalOn(false)
    }
    return (
        <div
            className="fixed bg-zinc-200 z-50 opacity-95 inset-0"
            id="popup-modal" aria-hidden="true">
            <div className="flex h-screen justify-center items-center">
                <div className="flex-col bg-white rounded-lg shadow">

                    <button type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200
                            hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            data-modal-toggle="popup-modal">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"/>
                        </svg>
                    </button>
                    <div className="p-6 text-center">
                        <svg className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none"
                             stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this product?</h3>
                        <button data-modal-toggle="popup-modal"
                                type="button"
                                onClick={handleOKClick}
                                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none
                                focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5
                                text-center mr-2">
                            Yes, I'm sure
                        </button>
                        <button data-modal-toggle="popup-modal"
                                type="button"
                                onClick={handleCancelClick}
                                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none
                                focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5
                                hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500
                                dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            No, Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;