import React from 'react'
import bannerp from './../assets/bannerRight.jpg'

function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-12 flex flex-col md:flex-row my-10'>
                <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>
                            The Ultimate Library Managament app
                            <span className='text-blue-400'> for Everyone !!</span>
                        </h1>
                        <p className='text-xl'>
                            In this fast-paced world where People have less time to think, Librarian is an all-show, less-talk web application built to cater to every Library Managment need, even those that may arise in the Future.
                        </p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="black"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow dark:text-black" placeholder="Email" />
                        </label>
                    </div>
                    <button className="btn mt-6 text-white bg-blue-400 btn-primary hover:bg-blue-500 cursor-pointer ">Get Started</button>
                </div>
                <div className='w-full md:w-1/2 order-1 mx-auto'>
                    <img src={bannerp} className='w-[400px] h-[400px] rounded-[30px] md:mt-[100px] md:mx-auto mx-auto mt-[80px]' alt="Books stacked in order :)"/>
                </div>
            </div>
        </>
    )
}

export default Banner