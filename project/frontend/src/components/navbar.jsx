import React, {Component, Fragment} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav class="bg-white border-b border-gray-200 fixed z-30 w-full">
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-start">
                            <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar"
                                    class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                                <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <svg id="toggleSidebarMobileClose" class="w-6 h-6 hidden" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </button>
                            <div className="text-xl font-bold flex items-center lg:ml-2.5">
                                <svg className="h-6 mr-2" viewBox="0 0 60 59" fill="none"
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
                                <span className="self-center whitespace-nowrap">Panda Mall</span>

                            </div>
                            <form action="#" method="GET" class="hidden lg:block lg:pl-32">
                                <label for="topbar-search" class="sr-only">Search</label>
                                <div class="mt-1 relative lg:w-64">
                                    <div
                                        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </div>
                                    <input type="text" name="email" id="topbar-search"
                                           class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                                           placeholder="Search">
                                    </input>
                                </div>
                            </form>
                        </div>
                        <div class="flex items-center">
                            <button id="toggleSidebarMobileSearch" type="button"
                                    class="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg">
                                <span class="sr-only">Search</span>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </button>
                            <div class="hidden lg:flex items-center">
                                <span class="text-base font-normal text-gray-500 mr-5">Open source ❤️</span>
                                <div class="-mb-1">
                                    <a class="github-button"
                                       href="https://github.com/themesberg/windster-tailwind-css-dashboard"
                                       data-color-scheme="no-preference: dark; light: light; dark: light;"
                                       data-icon="octicon-star" data-size="large" data-show-count="true"
                                       aria-label="Star themesberg/windster-tailwind-css-dashboard on GitHub">Star</a>
                                </div>
                            </div>
                            <a href="#" class="hidden sm:inline-flex ml-5 text-white
                                bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg
                                text-sm px-5 py-2.5 text-center items-center mr-3">
                                <svg class="svg-inline--fa fa-gem -ml-1 mr-2 h-4 w-4" aria-hidden="true"
                                     focusable="false" data-prefix="fas" data-icon="gem" role="img"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                          d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"/>
                                </svg>
                                Upgrade to Pro
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

        )
            ;
    }
}

export default Navbar;