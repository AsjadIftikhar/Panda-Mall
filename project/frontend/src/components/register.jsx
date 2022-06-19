import React, {Component} from 'react';

import {register, login} from "../services/userServices";
import {withRouter} from '../utils/withRouter';

class Register extends Component {
    constructor(props){
        super(props)
        this.DoSubmit=this.DoSubmit.bind(this);
    }
    state = {
        new_user: {
            "first_name": "",
            "last_name": "",
            "username": "",
            "email": "",
            "password": "",
            "confirm_password": "",

        },
        errors: []

    };
    handleFormChange = e => {
        const new_user = {...this.state.new_user};
        new_user[e.currentTarget.name] = e.currentTarget.value;
        this.setState({new_user});
    }

    DoSubmit = async (e) => {
        e.preventDefault()

        if (this.state.new_user.password !== this.state.new_user.confirm_password) {
            const errors = this.state.errors
            errors.push("Passwords Do Not Match!")

            this.setState({errors})

        } else {
            try {
                const response = await register(this.state.new_user)
                if (response.status === 201) {
                    await login(this.state.new_user)
                    this.props.navigate('/profile')

                }


            } catch (ex) {
                if (ex.response && ex.response.status === 400) {
                    const errors = this.state.errors
                    errors.push(ex.response.data)
                    this.setState({errors})
                }
            }

        }


    }

    render() {
        const {new_user, errors} = this.state;

        return (
            <div className="bg-teal-100">
                <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
                    <a href="/" className="text-2xl font-semibold flex justify-center items-center mb-8 lg:mb-10">
                        <img src="/logo.svg" className="h-10 mr-4" alt="Windster Logo"/>
                        <span
                            className="self-center text-gray-700 text-4xl whitespace-nowrap">
                            Panda Mall Store Management
                        </span>
                    </a>
                    <div className="bg-white border border-teal-500 drop-shadow-2xl rounded-lg md:mt-0 w-1/2 xl:p-0">
                        <div className="px-12 py-8">

                            {/*Errors*/}
                            {errors.map(err => (
                                <div
                                    className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                                    role="alert">
                                    <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor"
                                         viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <div>
                                        <span className="font-medium">Form Error!</span> {err}
                                    </div>
                                </div>
                            ))}


                            {/*End Errors*/}


                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-600 py-4">
                                Create a Free Store
                            </h2>
                            <form className="space-y-4" onSubmit={this.DoSubmit}>
                                <div>
                                    <label className="text-sm font-medium text-gray-900 block mb-2">First Name</label>
                                    <input type="text"
                                           name="first_name"
                                           id="first_name"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                                      focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Outfitters"
                                           value={new_user.first_name}
                                           onChange={this.handleFormChange}
                                           required/>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Last Name</label>
                                    <input type="text"
                                           name="last_name"
                                           id="last_name"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg
                                                      focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="INC"
                                           value={new_user.last_name}
                                           onChange={this.handleFormChange}
                                           required/>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-900 block mb-2">User Name</label>
                                    <input type="text" name="username"
                                           id="username"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg
                                                      focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="outfitters"
                                           value={new_user.username}
                                           onChange={this.handleFormChange}
                                           required/>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Your Email</label>
                                    <input type="email"
                                           name="email"
                                           id="email"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg
                                                      focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="name@company.com"
                                           value={new_user.email}
                                           onChange={this.handleFormChange}
                                           required/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">
                                        Your Password</label>
                                    <input type="password"
                                           name="password"
                                           id="password"
                                           placeholder="••••••••"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg
                                                      focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           value={new_user.password}
                                           onChange={this.handleFormChange}
                                           required/>
                                </div>
                                <div>
                                    <label className="text-sm text-gray-900 block mb-2">Confirm Password</label>
                                    <input type="password"
                                           name="confirm_password"
                                           id="confirm_password"
                                           placeholder="••••••••"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg
                                                      focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           value={new_user.confirm_password}
                                           onChange={this.handleFormChange}
                                           required/>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" name="remember" type="checkbox"
                                               className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200
                                           h-4 w-4 rounded"
                                               required/>
                                    </div>
                                    <div className="text-sm ml-3">
                                        <label htmlFor="remember" className="font-medium text-gray-900">I accept the <a
                                            href="#" className="text-teal-500 hover:underline">Terms and
                                            Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4
                                    focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto
                                    text-center">Create Account
                                </button>
                                <div className="text-sm font-medium text-gray-500">
                                    Already have an account?
                                    <a href="/login" className="text-teal-500 hover:underline">Login here</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Register);
