import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/list.json'
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
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const filterData = list.filter((data) => data.category.includes("Free"))
    // console.log(filterData)
    return (
        <>
            <div className='max-w-sxreen-2xl container mx-1 md:pl-16 px-10'>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Books Offered</h1>
                    <p>Books that are free to read for a Limited Time, So Grab on to the Offer before time runs out.</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {filterData.map((item) => (
                            <Card item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeCourses