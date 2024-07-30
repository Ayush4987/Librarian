import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div className='flex h-screen items-center justify-center dark:text-black'>
                <div id="my_modal_4" className="w-[500px] m-5">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => document.getElementById("my_modal_4").close()}>✕</Link>

                            <h1 className="font-bold text-xl">Sign Up</h1>
                            {/* Name */}
                            <div className='mt-4 space-y-2'>
                                <span>
                                    Name
                                </span>
                                <br />
                                <input type="text"
                                    placeholder='Enter your Name'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("name", { required: true })}
                                />
                                <br />
                                {errors.name && <span className='text-sm text-red-500'>*This field is required</span>}
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
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>*This field is required</span>}
                            </div>
                            {/* Message */}
                            <div className='mt-4 space-y-2'>
                                <span>
                                    Password
                                </span>
                                <br />
                                <input type="password"
                                    placeholder='Enter your Password'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>*This field is required</span>}
                            </div>
                            {/* Button */}
                            <div className='flex justify-around mt-5'>
                                <button className='bg-blue-300 text-white rounded-md px-3 py-2 hover:bg-blue-500 duration-150'>Sign Up</button>
                                <p className='text-xl'>
                                    Have Account?{" "}
                                    <button className='underline text-blue-700 cursor-pointer'
                                    onClick={()=>document.getElementById("my_modal_3").showModal()}>
                                        Login
                                    </button>{" "}
                                    <Login/>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup