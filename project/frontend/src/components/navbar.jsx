import React, {Component} from 'react';
import profile from './profile.svg'
import {NavLink} from "react-router-dom";
import {logout} from "../services/userServices";

class Navbar extends Component {
    render() {
        return (
            <nav className="bg-white border-b border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <div className="flex items-center md:order-2">
                        <button type="button"
                                className="flex mr-3 text-sm bg-gray-800 rounded-2xl md:mr-0 focus:ring-4
                                focus:ring-gray-300"
                                id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-16 h-16" src={profile}
                                 alt="user photo"/>
                        </button>

                        <div
                            className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100
                            shadow dark:bg-gray-700 dark:divide-gray-600"
                            id="dropdown">
                            <div className="py-3 px-4">
                                <span
                                    className="block text-sm text-gray-900 dark:text-white">{this.props.store.brand_name}</span>
                                <a href={this.props.store.company_website}
                                    className="block text-sm font-medium text-gray-500 truncate hover:text-gray-400">
                                    {this.props.store.company_website}
                                </a>
                            </div>
                            <ul className="py-1" aria-labelledby="dropdown">
                                <li>
                                    <NavLink to="/dashboard"
                                             className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                                        Dashboard</NavLink>
                                </li>
                                <li>
                                    <button onClick={() => {
                                        logout();
                                        window.location = "/login"
                                    }}
                                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">Sign
                                        out
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="mobile-menu-2" type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clipRule="evenodd"/>
                            </svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                         id="mobile-menu-2">
                        <div className="hidden relative mr-3 md:mr-0 md:block">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1
                                          0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                            <input type="text" id="email-adress-icon"
                                   className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border
                                   border-gray-600 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
                                   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                   dark:focus:border-blue-500"
                                   placeholder="Search..."/>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;