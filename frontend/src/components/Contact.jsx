import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Navbar from './Navbar'

function Conatct() {
    return (
        <>
            <Navbar/>
            <div className='flex h-screen items-center justify-center dark:text-black'>
                <div id="my_modal_4" className="w-[500px] m-5">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => document.getElementById("my_modal_4").close()}>✕</Link>

                            <h1 className="font-bold text-2xl">Contact Us</h1>
                            {/* Name */}
                            <div className='mt-4 space-y-2'>
                                <span>
                                    Name
                                </span>
                                <br />
                                <input type="text"
                                    placeholder='Enter your Name'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    // {...register("name", { required: true })}
                                />
                                {/* <br /> */}
                                {/* {errors.name && <span className='text-sm text-red-500'>*This field is required</span>} */}
                            </div>
                            {/* Email */}
                            <div className='mt-4 space-y-2'>
                                <span>
                                    Email
                                </span>
                                <br />
                                <input type="email"
                                    placeholder='Enter your Email'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    // {...register("email", { required: true })}
                                />
                                {/* <br /> */}
                                {/* {errors.password && <span className='text-sm text-red-500'>*This field is required</span>} */}
                            </div>
                            {/* Message */}
                            <div className='mt-4 space-y-2'>
                                <span>
                                    Password
                                </span>
                                <br />
                                <textarea type="text"
                                    placeholder='Enter your Message'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                />
                                {/* <br /> */}
                                {/* {errors.password && <span className='text-sm text-red-500'>*This field is required</span>} */}
                            </div>
                            {/* Button */}
                            <div className='flex justify-around mt-5'>
                                <button className='bg-blue-300 text-white rounded-md px-3 py-2 hover:bg-blue-500 duration-150'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conatct