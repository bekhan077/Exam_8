import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineAlignVerticalBottom } from 'react-icons/md';
import { IoIosHeartEmpty } from 'react-icons/io';
import { navostyCompany } from './navostyCompany';

const NavostiyCompany = () => {

    const sliderRef = useRef(null);

    // Custom prev arrow component
    const PrevArrow = ({ className, onClick }) => (
        <button
            className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full shadow-md z-10`}
            onClick={onClick}
            style={{ display: "none" }}
        >
            <div className='absolute top-[300px] left-[30px] w-[45px] h-[45px] border bg-[white] rounded-[50%] flex items-center justify-center'>
                <FaArrowLeft className="text-[black] text-[18px]" />
            </div>
        </button>
    );

    // Custom next arrow component
    const NextArrow = ({ className, onClick }) => (
        <button
            className={`${className}`}
            onClick={onClick}
            style={{ display: "none" }}
        >
            <div className='absolute top-[300px] right-[1360px] bg-white rounded-[50%] flex items-center justify-center'>
                <FaArrowRight className="text-[black] text-[18px]" />
            </div>
        </button>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='w-[95%] 2xl:w-[95%] xl:w-[95%] lg:w-[95%] md:w-[95%] xl:h-[600px] 2xl:h-[600px] lg:h-[600px] md:h-[700px] sm:h-[820px] h-[750px] mx-auto mt-[30px]'>
            <div className='w-[100%] 2xl:w-[1440px] mx-auto h-[100%] 2xl:flex xl:flex lg:flex '>
                <div className='w-[100%] 2xl:w-[20%] xl:w-[20%] lg:w-[20%] md:w-[100%] sm:w-[100%]  md:h-[10%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] p-4'>
                    <h2 className='text-[30px] font-semibold'>Каталог товаров</h2>
                    <ul className='2xl:block xl:block lg:block md:flex sm:flex gap-2'>
                        <li className='text-gray-500 cursor-pointer'>Хиты продаж</li>
                        <li className='text-gray-500 cursor-pointer'>Новинки</li>
                        <li className='text-gray-500 cursor-pointer'>Акции</li>
                    </ul>
                </div>
                <div className='w-[100%] 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[100%] sm:w-[100%] h-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[90%]'>
                    <Slider ref={sliderRef} {...settings} className='w-full mx-auto mt-[50px]'>
                        {navostyCompany.map((item, index) => (
                            <div key={index} className='px-2 w-[50%]'>
                                <div className="w-[100%] 2xl:h-[400px] xl:h-[370px] lg:h-[350px] md:h-[400px] sm:h-[530px] h-[400px] border rounded-[20px]">
                                    <div className="w-[100%] h-[50%] bg-[white] flex items-center justify-center relative rounded-[20px]">

                                        <img
                                            src={item.img}
                                            alt={`Complex ${index + 1}`}
                                            className="w-[100%] h-[100%] object-cover rounded-tr-[20px] rounded-tl-[20px]"
                                        />
                                    </div>
                                    <div className='w-[90%] mx-auto'>
                                        <p className='text-[gray] text-[14px] w-[160px] mt-[20px]'>{item.year}</p>
                                        <h2 className='text-[20px] font-semibold w-[200px] mt-[10px]'>{item.name}</h2>
                                        <p className='text-[gray] text-[14px] w-[250px] 2xl:pt-[10px] xl:pt-[10px] '>{item.title_name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className='w-full h-[100px] flex justify-between items-center px-4'>
                        <div className='2xl:flex xl:flex lg:flex md:flex sm:flex gap-2 hidden'>
                            <div className='w-[45px] h-[45px] border border-gray-300 rounded-full bg-white flex items-center justify-center cursor-pointer' onClick={() => sliderRef.current.slickPrev()}>
                                <FaArrowLeft />
                            </div>
                            <div className='w-[45px] h-[45px] border border-gray-300 rounded-full bg-white flex items-center justify-center cursor-pointer' onClick={() => sliderRef.current.slickNext()}>
                                <FaArrowRight />
                            </div>
                        </div>
                        <div className='2xl:flex xl:flex md:flex lg:flex sm:flex gap-3  text-center'>
                            <button className='w-[220px] 2xl:w-[220px] xl:w-[210px] lg:w-[200px] md:w-[190px] sm:w-[180px] h-[40px] border rounded-[20px] font-semibold text-[#088269] border-[#088269] text-[14px]'>Бесплатная консультация</button>
                            <button className='w-[120px] 2xl:w-[220px] xl:w-[210px] lg:w-[200px] md:w-[190px] sm:w-[180px] h-[40px] border rounded-[20px] font-semibold bg-[#088269] border-[#088269] text-white mt-[5px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0'>Все товары</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavostiyCompany;
