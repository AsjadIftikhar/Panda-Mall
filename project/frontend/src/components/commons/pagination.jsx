import React from 'react';
import _ from 'lodash'

const Pagination = ({itemsCount, pageSize, currentPage, onPageChange}) => {

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    const inactive = "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
    const active = "py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";

    return (
        <div className="flex justify-end border-t border-gray-300 px-8 py-4">
            <nav aria-label="Page navigation example">
                <ul className="inline-flex items-center -space-x-px">
                    {pages.map(page => (
                        <li key={page}>
                            <button onClick={() => onPageChange(page)}
                                    className={page === currentPage ? active : inactive}
                            >{page}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;