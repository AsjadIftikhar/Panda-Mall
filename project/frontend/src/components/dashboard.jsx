import React, {Component} from 'react';

import icon from './icon.svg'
import {get_weekly_stats} from "../services/dashboardServices";
import Chart from "./chart";

class Dashboard extends Component {
    state = {
        weekly_stats: {
            "products_this_week": "",
            "percentage_change_in_products": "",
            "visitors_this_week": "",
            "percentage_change_in_visitors": "",
            "signups_this_week": 1,
            "percentage_change_in_signups": "",
            "latest_customers": [
                {
                    "username": "",
                    "email": "",
                    "city": "",
                }
            ]
        }
    }

    async componentDidMount() {
        const {data: weekly_stats} = await get_weekly_stats()

        this.setState({weekly_stats})
    }

    render() {
        const {
            products_this_week, percentage_change_in_products, visitors_this_week, percentage_change_in_visitors,
            signups_this_week, percentage_change_in_signups, latest_customers
        } = this.state.weekly_stats
        return (
            <div className="pt-6 px-4">
                <div className="w-4/5">
                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                        <Chart />
                    </div>
                </div>
                <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <span
                                    className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{products_this_week}</span>
                                <h3 className="text-base font-normal text-gray-500">New products this week</h3>
                            </div>
                            <div
                                className={`ml-5 w-0 flex items-center justify-end flex-1 ${percentage_change_in_products > 0 ? "text-green-500" : "text-red-500"}  
                                text-base font-bold`}>
                                {percentage_change_in_products}%
                                {percentage_change_in_products > 0 ?
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                              clipRule="evenodd"/>
                                    </svg> : <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                  xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"/>
                                    </svg>
                                }

                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <span
                                    className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{visitors_this_week}</span>
                                <h3 className="text-base font-normal text-gray-500">Visitors this week</h3>
                            </div>
                            <div
                                className={`ml-5 w-0 flex items-center justify-end flex-1 ${percentage_change_in_visitors > 0 ? "text-green-500" : "text-red-500"}  
                                text-base font-bold`}>
                                {percentage_change_in_visitors}%
                                {percentage_change_in_visitors > 0 ?
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                              clipRule="evenodd"/>
                                    </svg> : <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                  xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"/>
                                    </svg>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <span
                                    className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{signups_this_week}</span>
                                <h3 className="text-base font-normal text-gray-500">User signups this week</h3>
                            </div>
                            <div
                                className={`ml-5 w-0 flex items-center justify-end flex-1 ${percentage_change_in_signups > 0 ? "text-green-500" : "text-red-500"}  
                                text-base font-bold`}>
                                {percentage_change_in_signups}%
                                {percentage_change_in_signups > 0 ?
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                              clipRule="evenodd"/>
                                    </svg> : <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                  xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"/>
                                    </svg>
                                }
                            </div>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                    <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold leading-none text-teal-700">Latest Customers</h3>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200">
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-teal-400 truncate">
                                                Customer Name
                                            </p>
                                        </div>
                                        <div
                                            className="inline-flex items-center text-base font-semibold text-teal-400">
                                            City
                                        </div>
                                    </div>
                                </li>
                                {latest_customers.map((customer, index) => (
                                    <li key={index} className="py-3 sm:py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img className="h-8 w-8 rounded-full"
                                                     src={icon}
                                                     alt="Neil image"/>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate">
                                                    {customer.username}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate">
                                                    {customer.email}
                                                </p>
                                            </div>
                                            <div
                                                className="inline-flex items-center text-base text-gray-500">
                                                {customer.city}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;