import { Rating } from '@mui/material'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiMinus } from 'react-icons/fi'
import { IoIosHeartEmpty } from 'react-icons/io'
import { MdOutlineAlignVerticalBottom } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import { catalogCrData } from '../carusels/catalogCarouselData'
import CatalogCarouselData from '../carusels/CatalogCarouselData.jsx'
import PopularCategories from '../carusels/PopularCategories'
import BrendCarousel from '../carusels/BrendCarousel'
import CompanyCarousel from '../carusels/CompanyCarousel'
import Opicany from './Opicany.jsx'

const ProductPage = () => {

    const { id } = useParams();
    console.log(id);

    const product = catalogCrData.find((item) => item.id == id);
    if (!product) {
        return <p>Product not found</p>;
    }
    console.log(product);

    return (
        <>
            <div className='w-[100%] h-[auto] mx-auto mt-[20px] mb-[10px] '>
                <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%]  2xl:flex xl:flex lg:flex justify-between mx-auto '>
                    <div className='2xl:w-[63%] xl:w-[60%] lg:w-[58%] md:w-[100%] w-[100%] h-[500px] rounded-[10px]  bg-white relative'>
                        <div className='absolute w-[100%] h-[50px] rounded-[10px]'>
                            <div className='w-[95%] h-[100%] mx-auto flex items-center justify-between'>
                                <button className='w-[90px] h-[30px] rounded-[20px] border border-[#088269] font-semibold text-[#088269] bg-[#BDDBC7]'>Новинка</button>
                                <div className='flex gap-2'>
                                    <div className='w-[35px] h-[35px] rounded-[10px] border flex items-center justify-center' ><MdOutlineAlignVerticalBottom className='text-[22px]' /></div>
                                    <div className='w-[35px] h-[35px] rounded-[10px] border flex items-center justify-center' ><IoIosHeartEmpty className='text-[22px]' /></div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] h-[85%] rounded-tl-[10px] rounded-tr-[10px] flex items-center justify-center'><img src={product.img} alt="" className='w-[100%] object-contain h-[100%] border cursor-pointer' /></div>
                        <div className='w-[95%] mx-auto h-[15%] flex items-center gap-2'>
                            <div className='w-[60px] h-[60px] border rounded-[10px] cursor-pointer'><img src={product.img} alt="" /></div>
                            <div className='w-[60px] h-[60px] border rounded-[10px] cursor-pointer'><img src={product.img} alt="" /></div>
                            <div className='w-[60px] h-[60px] border rounded-[10px] cursor-pointer'><img src={product.img} alt="" /></div>
                        </div>
                    </div>
                    <div className='2xl:w-[35%] xl:w-[38%] lg:w-[40%] md:w-[100%] w-[95%] mx-auto h-[540px] rounded-[10px] mt-[20px] 2xl:mt-0 xl:mt-0 lg:mt-0 '>
                        <h2 className='2xl:text-[26px] xl:text-[24px] lg:text-[23px] md:text-[21px] font-semibold'>{product.name}</h2>
                        <Rating name="size-large" defaultValue={2} size="large" style={{ fontSize: "16px" }} />
                        <p className='text-[gray] 2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] mt-[10px]'>Категория:{product.kategoria}</p>
                        <p className='text-[gray] 2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] mt-[5px]'>Производитель: {product.Manufacturer}</p>
                        <p className='text-[gray] 2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] mt-[5px]'>Артикул: {product.vendorcode}</p>
                        <p className='text-[gray] 2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] mt-[5px]'>В наличии: {product.naliche}</p>
                        <h2 className='2xl:text-[24px] lg:text-[20px] xl:text-[22px] md:text-[20px] font-semibold mt-[10px] mb-[10px]'>{product.price}</h2>
                        <div className='flex gap-2 mt-[20px]'>
                            <div className='w-[100px] h-[40px] rounded-[20px] flex border border-[#088269] items-center justify-center gap-2'>
                                <FiMinus className='cursor-pointer' />
                                <span>0</span>
                                <AiOutlinePlus className='font-light cursor-pointer' />
                            </div>
                            <button className='2xl:w-[150px] xl:w-[150px] lg:w-[150px] md:w-[150px] sm:w-[150px] w-[30%] h-[40px] border border-[#088269] rounded-[20px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] text-[12px] p-2 text-[#088269] font-semibold'>Задать вопрос</button>
                            <button className='2xl:w-[170px] xl:w-[150px] lg:w-[150px] md:w-[150px] sm:w-[150px] w-[35%] h-[40px] border border-[#088269] rounded-[20px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] text-[12px] p-2 bg-[#088269] text-white font'>Добавить в корзину</button>
                        </div>
                        <hr className='mt-[30px] mb-[10px]' />
                        <h3 className='font-semibold text-[24px]'>О товаре</h3>
                        <p className='text-black 2xl:text-[14px] xl:text-[13px] lg:text-[13px] md:text-[12px] mt-[20px] w-[95%]'>Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма    в науке будут функционально разнесены.</p>
                    </div>
                </div>
            </div>
            <Opicany />
            <CatalogCarouselData />
            <CompanyCarousel />
            <PopularCategories />
            <BrendCarousel />
        </>
    )
}

export default ProductPage
