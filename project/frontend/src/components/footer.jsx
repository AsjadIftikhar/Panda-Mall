import React, {Component} from 'react';
import logo from './logo.svg'

class Footer extends Component {
    render() {
        return (
            <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a
                    href="https://flowbite.com" className="hover:underline">Panda Mall™</a>. All Rights Reserved.
    </span>
            </footer>
        );
    }
}

export default Footer;