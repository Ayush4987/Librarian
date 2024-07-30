import React from 'react'

function Card({item}) {
    // console.log(item);
    const categories = item.category.split(" ");
    // console.log(categories);
    return (
        <>
            <div className='mt-8'>
                <div className="card bg-base-100 w-96 h-[600px] shadow-2xl hover:scale-105 duration-200 my-10 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="book" className='w-auto mt-2 h-[300px] rounded-md'/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge bg-blue-300">New</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-start">
                            {categories.map((p,index)=><div className="badge badge-outline" key={index}>{p}</div>)}  
                        </div>
                        <div className='cursor-pointer mt-4 px-2 py-1 rounded-full border-[2px] justify-end hover:bg-blue-300 text-center transition-ease duration-200'>
                            Buy Now
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card