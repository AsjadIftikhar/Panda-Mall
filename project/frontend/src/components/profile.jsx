import React, {useState} from 'react';

import {update} from "../services/userServices";

const ProfileComponent = () => {

    // Profile Fields
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [brand_name, setBrandName] = useState('');
    const [website_url, setWebsiteUrl] = useState('');
    const [ntn, setNtn] = useState('');
    const [account, setAccount] = useState('');
    const [description, setDescription] = useState('');


    const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await update({phone, address, city, brand_name, website_url, ntn, account, description})
            window.location = "/"

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else {
                setErrMsg('Try Again! Failed to Update Store Profile');
            }
        }
    }

    return (
        <div className="bg-LightGrey border border-gray-50 my-8">
            <span>{errMsg}</span>
            <div className="flex flex-row bg-white drop-shadow-lg rounded-lg">
                <div className="basis-1/4 px-8 border-r-2 border-gray-300">
                    <h3 className="text-xl font-semibold py-6">Preferences</h3>
                    <span className="text-sm text-gray-600">Notifications</span>
                    <div>
                        <label htmlFor="checked-toggle"
                               className="relative inline-flex items-center my-4 cursor-pointer">
                            <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" checked/>
                            <div
                                className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4
                                peer-focus:ring-teal-500 peer-checked:after:translate-x-full
                                peer-checked:after:border-white after:content-[''] after:absolute
                                after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border
                                after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"/>
                        </label>
                    </div>

                    <span className="text-sm text-gray-600">Language</span>
                    <div className="py-4">
                        <button id="dropdownDefault" data-dropdown-toggle="dropdown"
                                className="text-gray-700 bg-transparent border-2 border-gray-300 hover:bg-LightGrey
                                 font-medium rounded-full text-sm px-4 py-2
                                text-center inline-flex items-center"
                                type="button">
                            English
                            <svg className="w-4 h-4 ml-2" fill="none"
                                 stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                    </div>

                    <span className="text-sm text-gray-600">Visibility</span>
                    <div>

                        <div className="flex my-4">
                            <div className="flex items-center mr-4">
                                <input id="inline-radio" type="radio" value="" name="inline-radio-group"
                                       className="w-4 h-4 text-teal-500 bg-gray-100 border-gray-300 focus:ring-teal-500
                                        focus:ring-2"/>
                                <label htmlFor="inline-radio"
                                       className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    On
                                </label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input id="inline-2-radio" type="radio" value="" name="inline-radio-group"
                                       className="w-4 h-4 text-teal-500 bg-gray-100 border-gray-300 focus:ring-teal-500
                                        focus:ring-2 "/>
                                <label htmlFor="inline-2-radio"
                                       className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Off
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="basis-3/4 px-16 ">
                    <h3 className="text-xl font-semibold py-6">Account</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="grid xl:grid-cols-2 xl:gap-16">
                            <div className="mb-6 w-full">
                                <label htmlFor="phone_number"
                                       className="block mb-2 text-sm font-medium text-gray-900">Phone Number
                                </label>
                                <input type="tel"
                                       id="phone_number"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                                       onChange={(e) => setPhone(e.target.value)}
                                       value={phone}
                                       required/>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <label htmlFor="website"
                                       className="block mb-2 text-sm font-medium text-gray-900">Website
                                    URL
                                </label>
                                <input type="url"
                                       id="website"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                                       onChange={(e) => setWebsiteUrl(e.target.value)}
                                       value={website_url}
                                       required/>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-16">
                            <div className="relative z-0 mb-6 w-full group">
                                <label htmlFor="ntn"
                                       className="block mb-2 text-sm font-medium text-gray-900">NTN No.
                                </label>
                                <input type="text"
                                       id="ntn"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                                       onChange={(e) => setNtn(e.target.value)}
                                       value={ntn}
                                       required/>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <label htmlFor="account"
                                       className="block mb-2 text-sm font-medium text-gray-900">Bank Account No.
                                </label>
                                <input type="text"
                                       id="account"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                                       onChange={(e) => setAccount(e.target.value)}
                                       value={account}
                                       required/>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-16">
                            <div className="relative z-0 mb-6 w-full group">
                                <label htmlFor="brand_name"
                                       className="block mb-2 text-sm font-medium text-gray-900">Brand
                                    Name
                                </label>
                                <input type="text"
                                       id="brand_name"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                                       onChange={(e) => setBrandName(e.target.value)}
                                       value={brand_name}
                                       required/>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <label htmlFor="city"
                                       className="block mb-2 text-sm font-medium text-gray-900">City
                                </label>
                                <input type="text"
                                       id="city"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                                       onChange={(e) => setCity(e.target.value)}
                                       value={city}
                                       required/>
                            </div>
                        </div>
                        <div className="grid xl:grid-cols-2 xl:gap-16">
                            <div className="mb-6 w-full">
                                <label htmlFor="address"
                                       className="block mb-2 text-sm font-medium text-gray-900">Address
                                </label>
                                <textarea id="address" rows="4"
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg
                                          border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
                                          onChange={(e) => setAddress(e.target.value)}
                                          value={address}
                                          required/>
                            </div>
                            <div className="mb-6 w-full">
                                <label htmlFor="address"
                                       className="block mb-2 text-sm font-medium text-gray-900">Store Description
                                </label>
                                <textarea id="description" rows="4"
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg
                                          border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
                                          onChange={(e) => setDescription(e.target.value)}
                                          value={description}
                                          required/>
                            </div>
                        </div>

                        <div className="grid xl:grid-cols-2 xl:gap-16">
                            <div className="relative z-0 mt-6 mb-6 w-full group">
                                <button href="#" className="text-teal-800 text-xl text-center w-full hover:underline">
                                    Deactivate Store
                                </button>
                            </div>
                            <div className="mb-6 w-full">
                                <button type="submit"
                                        className="mt-6 text-white bg-teal-500 hover:bg-teal-800 focus:ring-4
                                        focus:ring-teal-300 font-medium rounded-full w-3/4 px-16 py-3 text-center">
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;
