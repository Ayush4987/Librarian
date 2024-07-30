import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from "axios"
import { Link } from 'react-router-dom'

function Course() {
    const [book,setBook] = useState([]);
    useEffect(()=>{
        const getBook = async()=>{
            try {
              const res = await axios.get("http://localhost:4001/book");
              console.log(res.data);
              setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    },[])
    return (
        <>
            <div className='max-w-sxreen-2xl container mx-1 md:pl-16 px-10 py-4 md:py-8'>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl'>
                        All our Premium Books are available for Download here, at the
                        <span className='text-blue-300'>
                            &nbsp;best prices!
                        </span>
                    </h1>
                    <p className='mt-8 md:mt-12'>
                        To maintain the Website, We tend to charge a small fee to borrow Books that are not easily Available.
                        This is a recurring payment, or You can buy a permanent Copy of the book to store on your system.
                        Users can also buy Librarian&copy; Premium to access Books without having to pay any one-time fees. 
                    </p>
                    <Link to="/">
                        <button className='mt-6 bg-blue-300 text-white px-5 py-2 rounded-md transition hover:bg-blue-500 hover:ease-in duration-150'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
                    {
                        book.map((item)=>(
                            <Card key={item.id} item={item}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course