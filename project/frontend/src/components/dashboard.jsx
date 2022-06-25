import React, {Component} from 'react';
import {get_weekly_stats} from "../services/dashboardServices";

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
        const latest_customers = weekly_stats.latest_customers
        latest_customers.map(customer => (console.log(customer.username)))

        this.setState({weekly_stats})
    }

    render() {
        const {
            products_this_week, percentage_change_in_products, visitors_this_week, percentage_change_in_visitors,
            signups_this_week, percentage_change_in_signups, latest_customers
        } = this.state.weekly_stats
        return (
            <div className="pt-6 px-4">
                <div className="w-full">
                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex-shrink-0">
                                <span
                                    className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">$45,385</span>
                                <h3 className="text-base font-normal text-gray-500">Sales this week</h3>
                            </div>
                            <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                12.5%
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                        </div>

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
                            <h3 className="text-xl font-bold leading-none text-gray-900">Latest Customers</h3>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200">
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-gray-900 truncate">
                                                Customer Name
                                            </p>
                                        </div>
                                        <div
                                            className="inline-flex items-center text-base font-semibold text-gray-900">
                                            City
                                        </div>
                                    </div>
                                </li>
                                {latest_customers.map((customer, index) => (
                                    <li key={index} className="py-3 sm:py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img className="h-8 w-8 rounded-full"
                                                     src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
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
                                                className="inline-flex items-center text-base font-semibold text-gray-900">
                                                {customer.city}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        {/*<div className="mb-4 flex items-center justify-between">*/}
                        {/*    <div>*/}
                        {/*        <h3 className="text-xl font-bold text-gray-900 mb-2">Latest Transactions</h3>*/}
                        {/*        <span className="text-base font-normal text-gray-500">This is a list of latest transactions</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="flex flex-col mt-8">*/}
                        {/*    <div className="overflow-x-auto rounded-lg">*/}
                        {/*        <div className="align-middle inline-block min-w-full">*/}
                        {/*            <div className="shadow overflow-hidden sm:rounded-lg">*/}
                        {/*                <table className="min-w-full divide-y divide-gray-200">*/}
                        {/*                    <thead className="bg-gray-50">*/}
                        {/*                    <tr>*/}
                        {/*                        <th scope="col"*/}
                        {/*                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">*/}
                        {/*                            Transaction*/}
                        {/*                        </th>*/}
                        {/*                        <th scope="col"*/}
                        {/*                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">*/}
                        {/*                            Date &amp; Time*/}
                        {/*                        </th>*/}
                        {/*                        <th scope="col"*/}
                        {/*                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">*/}
                        {/*                            Amount*/}
                        {/*                        </th>*/}
                        {/*                    </tr>*/}
                        {/*                    </thead>*/}
                        {/*                    <tbody className="bg-white">*/}
                        {/*                    <tr>*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">*/}
                        {/*                            Payment from <span className="font-semibold">Bonnie Green</span>*/}
                        {/*                        </td>*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">*/}
                        {/*                            Apr 23 ,2021*/}
                        {/*                        </td>*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">*/}
                        {/*                            $2300*/}
                        {/*                        </td>*/}
                        {/*                    </tr>*/}
                        {/*                    <tr className="bg-gray-50">*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">*/}
                        {/*                            Payment refund to <span className="font-semibold">#00910</span>*/}
                        {/*                        </td>*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">*/}
                        {/*                            Apr 23 ,2021*/}
                        {/*                        </td>*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">*/}
                        {/*                            -$670*/}
                        {/*                        </td>*/}
                        {/*                    </tr>*/}
                        {/*                    <tr>*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">*/}
                        {/*                            Payment failed from <span className="font-semibold">#087651</span>*/}
                        {/*                        </td>*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">*/}
                        {/*                            Apr 18 ,2021*/}
                        {/*                        </td>*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">*/}
                        {/*                            $234*/}
                        {/*                        </td>*/}
                        {/*                    </tr>*/}
                        {/*                    <tr className="bg-gray-50">*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">*/}
                        {/*                            Payment from <span className="font-semibold">Lana Byrd</span>*/}
                        {/*                        </td>*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">*/}
                        {/*                            Apr 15 ,2021*/}
                        {/*                        </td>*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">*/}
                        {/*                            $5000*/}
                        {/*                        </td>*/}
                        {/*                    </tr>*/}
                        {/*                    <tr>*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">*/}
                        {/*                            Payment from <span className="font-semibold">Jese Leos</span>*/}
                        {/*                        </td>*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">*/}
                        {/*                            Apr 15 ,2021*/}
                        {/*                        </td>*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">*/}
                        {/*                            $2300*/}
                        {/*                        </td>*/}
                        {/*                    </tr>*/}
                        {/*                    <tr className="bg-gray-50">*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">*/}
                        {/*                            Payment from <span className="font-semibold">THEMESBERG LLC</span>*/}
                        {/*                        </td>*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">*/}
                        {/*                            Apr 11 ,2021*/}
                        {/*                        </td>*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">*/}
                        {/*                            $560*/}
                        {/*                        </td>*/}
                        {/*                    </tr>*/}
                        {/*                    <tr>*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">*/}
                        {/*                            Payment from <span className="font-semibold">Lana Lysle</span>*/}
                        {/*                        </td>*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">*/}
                        {/*                            Apr 6 ,2021*/}
                        {/*                        </td>*/}
                        {/*                        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">*/}
                        {/*                            $1437*/}
                        {/*                        </td>*/}
                        {/*                    </tr>*/}
                        {/*                    </tbody>*/}
                        {/*                </table>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;