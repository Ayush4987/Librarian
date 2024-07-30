import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios"
import Card from './Card';

function FreeCourses() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [book,setBook] = useState([]);
    useEffect(()=>{
        const getBook = async()=>{
            try {
              const res = await axios.get("http://localhost:4001/book");
              console.log(res.data);
              setBook(res.data.filter((data) => data.category.includes("Free")));
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    },[])
    return (
        <>
            <div className='max-w-sxreen-2xl container mx-1 md:pl-16 px-10'>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Books Offered</h1>
                    <p>Books that are free to read for a Limited Time, So Grab on to the Offer before time runs out.</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {book.map((item) => (
                            <Card item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeCourses