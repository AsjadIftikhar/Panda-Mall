import React, {Component, Fragment} from 'react';

// // grab everything we need
//     const btn = document.querySelector(".mobile-menu-button");
//     const sidebar = document.querySelector(".sidebar");
//
//     // add our event listener for the click
//     btn.addEventListener("click", () => {
//         sidebar.classList.toggle("-translate-x-full");
//     });

class Sidebar extends Component {
    render() {
        return (
            <Fragment>
                <div className="bg-gray-400 flex justify-between md:hidden">
                    <a href="#" className="block p-4 text-white font-bold">Panda Mall</a>

                    <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>

                <div
                    className="sidebar bg-gray-800 text-slate-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
                    <a href="https://flowbite.com" className="flex pl-2.5 mb-5">
                        <svg className="mr-3 h-9" viewBox="0 0 52 72" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.0604 27.0103C29.7333 23.0893 35.8474 16.6142 39.6254 8.51905C40.1123 7.47585 39.871 6.25371 39.3648 5.21976C38.1966 2.83369 37.9273 0.35731 31.5792 1.07481L29.0769 1.19405C30.0128 1.19405 29.5449 1.19405 29.0769 1.19405C26.2213 9.83921 20.8705 16.9667 13.0175 20.9078C7.54419 23.7048 3.49869 28.7902 1.59493 34.8927L1.08063 36.5412C1.02718 36.7125 0.953783 36.7439 1.03271 36.905V36.905C1.69551 38.2585 2.41237 37.8338 1.24774 36.8773C-0.0162787 35.8391 4.54649 41.9692 8.20235 42.3859C8.98846 42.4755 9.62624 41.8869 9.99718 41.188C12.8897 35.7384 16.5983 29.7497 22.0604 27.0103Z"
                                fill="#3798A6"/>
                            <path
                                d="M54.293 18.2545C52.9177 18.0829 51.6326 19.0064 50.8501 20.1503C46.5712 26.4051 40.9276 31.4619 34.0992 34.9362C28.0309 37.9875 23.3905 43.7085 21.2488 50.5738V50.5738C20.8823 51.9051 21.321 53.3053 22.0817 54.4577C22.8541 55.6279 23.2013 56.5055 25.0387 57.2056C25.2331 57.2797 25.4363 57.33 25.6412 57.3659L29.6561 58.0696C30.1014 58.1477 30.5803 57.9029 30.6385 57.4546V57.4546C30.6522 57.3488 30.6656 57.26 30.6995 57.1589C33.5732 48.5843 39.3809 41.6511 47.1875 37.7332C52.0449 35.251 56.5674 29.4173 58.7712 23.8703C59.2774 22.5963 58.9189 21.1675 57.9822 20.1666V20.1666C57.743 19.9111 57.4687 19.6866 57.1678 19.5079C55.698 18.635 54.964 18.3382 54.293 18.2545Z"
                                fill="#3798A6"/>
                            <path
                                d="M17.8462 46.7817C18.4399 48.0437 20.2086 47.5179 20.8231 46.2658C23.9715 39.8511 29.07 34.8495 35.2979 31.6915C41.4799 28.5111 46.6705 23.683 50.3399 17.7735C50.6236 17.3166 50.7683 16.7849 50.7594 16.2472C50.658 10.1604 49.3958 9.67645 47.3183 8.9339C45.5442 8.29976 43.3135 8.84337 42.332 10.4516C37.9465 17.6372 31.7406 23.4608 24.3513 27.2417C19.6664 29.5615 15.8593 33.5228 13.4571 38.3374C13.2609 38.7306 13.1639 39.1681 13.1742 39.6074C13.3408 46.715 16.2215 43.2109 17.84 46.768C17.8439 46.7766 17.8422 46.773 17.8462 46.7817V46.7817Z"
                                fill="#3798A6"/>

                        </svg>
                        <span
                            className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Panda Mall</span>
                    </a>

                    <nav>
                        <ul className="space-y-2 border-t border-gray-200">
                            <li>
                                <a href="#"
                                   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700">
                                    <svg
                                        className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                    </svg>
                                    <span className="ml-3 text-white">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700">
                                    <svg
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    <span className="flex-1 ml-3 text-white">Users</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700">
                                    <svg
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap text-white">Products</span>
                                    <span
                                        className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>

                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700">
                                    <svg
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap text-white">Sign Out</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                            <li>
                                <a href="#"
                                   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-400 dark:hover:bg-gray-700 dark:text-white group">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white dark:text-gray-400"
                                        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gem"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                              d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"/>
                                    </svg>
                                    <span className="ml-4 text-white">Upgrade to Pro</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-400 dark:hover:bg-gray-700 dark:text-white group">
                                    <svg
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                        <path fill-rule="evenodd"
                                              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    <span className="ml-3 text-white">Documentation</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-400 dark:hover:bg-gray-700 dark:text-white group">
                                    <svg
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
                                    </svg>
                                    <span className="ml-3 text-white">Components</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-400 dark:hover:bg-gray-700 dark:text-white group">
                                    <svg
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    <span className="ml-3 text-white">Help</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Fragment>
        );
    }
}

export default Sidebar;