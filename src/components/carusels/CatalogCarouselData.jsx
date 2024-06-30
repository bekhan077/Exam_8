import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { catalogCrData } from './catalogCarouselData';
import { MdOutlineAlignVerticalBottom } from 'react-icons/md';
import { IoIosHeartEmpty } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const CatalogCarouselData = () => {

    const navigate = useNavigate()



    const sliderRef = useRef(null);

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
        <div className='w-[95%] 2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] md:h-[750px] sm:h-[820px] h-[850px] mx-auto mt-[30px] mb-[40px]'>
            <div className='w-[100%] h-[100%] 2xl:flex xl:flex lg:flex '>
                <div className='w-[100%] 2xl:w-[20%] xl:w-[20%] lg:w-[20%] md:w-[100%] sm:w-[100%]  md:h-[10%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] p-4'>
                    <h2 className='text-[30px] font-semibold'>Каталог товаров</h2>
                    <ul className='2xl:block xl:block lg:block md:flex sm:flex gap-2'>
                        <li className='text-gray-500 cursor-pointer'>Хиты продаж</li>
                        <li className='text-gray-500 cursor-pointer'>Новинки</li>
                        <li className='text-gray-500 cursor-pointer'>Акции</li>
                    </ul>
                </div>
                <div className='w-[100%] 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[100%] sm:w-[100%] h-[100%] 2xl:h-[100%] xl:h-[10%] lg:h-[100%] md:h-[90%] '>
                    <Slider ref={sliderRef} {...settings} className='w-full mx-auto mt-[50px]'>
                        {catalogCrData.map((item, index) => (
                            <div key={index} className='px-2 w-[50%]'>
                                <div className="w-[100%] 2xl:h-[580px] xl:h-[580px] lg:h-[550px] md:h-[500px] sm:h-[530px] h-[570px] border rounded-[20px]">
                                    <div className="w-[100%] h-[50%] bg-[white] flex items-center justify-center relative rounded-[20px]">
                                        <div className='absolute flex justify-between w-[95%] mx-auto top-3'>
                                            <button className='w-[90px] h-[30px] rounded-[20px] border border-[#088269] font-semibold text-[#088269] bg-[#BDDBC7]'>{item.title}</button>
                                            <div className='flex gap-2'>
                                                <div className='cursor-pointer'><MdOutlineAlignVerticalBottom className='text-[24px]' /> </div>
                                                <div className='cursor-pointer'><IoIosHeartEmpty className='text-[26px]' /></div>
                                            </div>
                                        </div>
                                        <img
                                            src={item.img}
                                            alt={`Complex ${index + 1}`}
                                            className="w-[60%] h-[70%] object-cover rounded-tr-[20px] rounded-tl-[20px]"
                                        />
                                    </div>
                                    <div className='w-[90%] mx-auto'>
                                        <h2 className='2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[15px] sm:text-[14px] text-[13px] font-semibold w-[90%] mt-[20px]'>{item.name}</h2>
                                        <p className='text-[gray] text-[14px] w-[160px]'>{item.common_name}</p>
                                        <p className='text-[gray] text-[14px] w-[160px]'>{item.price_title}</p>
                                        <h2 className='text-[22px] font-semibold mt-[30px]'>{item.price}</h2>
                                        <button className='w-[100%] h-[45px] rounded-[20px] border font-semibold text-[#088269] mt-[20px] transition-all [transition:0.3s] hover:bg-[#088269] hover:text-[white]' onClick={() => navigate(`/product/${item.id}`)}>{item.btn_name}</button>
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
                        <div className='2xl:flex xl:flex lg:flex md:flex items-center 2xl:gap-3 xl:gap-3 lg:gap-3 md:gap-[50px]  sm:gap-3 gap-3 text-center'>
                            <button className='w-[220px] 2xl:w-[220px] xl:w-[210px] lg:w-[200px] md:w-[190px] sm:w-[200px] h-[40px] border rounded-[20px] font-semibold text-[#088269] border-[#088269] text-[12px]'> Бесплатная консультация</button>
                            <button className='w-[120px] 2xl:w-[220px] xl:w-[210px] lg:w-[200px] md:w-[190px] sm:w-[180px] h-[40px] border rounded-[20px] font-semibold bg-[#088269] border-[#088269] text-white mt-2 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0'>Все товары</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CatalogCarouselData;
