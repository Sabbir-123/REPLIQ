import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


  
    return (
        <section class="purple textColor">
        <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
            <div class="wf-ull lg:w-1/2">
                <p class="text-sm font-medium text-blue-500 dark:text-blue-400">404 error</p>
                <h1 class="mt-3 text-2xl font-semibold   md:text-3xl">Page not found</h1>
                <p class="mt-4 ">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>
    
                <div class="flex items-center mt-6 gap-x-3">
                    <button class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                       <Link to={'/'}> Take me home</Link>
                    </button>
                </div>
            </div>
    
            <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                <img class="w-full max-w-lg lg:mx-auto" src="https://i.ibb.co/dQjwz6m/404-landing-page-free-vector.jpg" alt=""/>
            </div>
        </div>
    </section>
    );
};

export default ErrorPage;