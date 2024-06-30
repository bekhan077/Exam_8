import React from 'react'
import { BiHome } from 'react-icons/bi'
import { FaRegUser, FaSearch } from 'react-icons/fa'
import { GoHeart } from 'react-icons/go'
import { GrCatalog } from 'react-icons/gr'
import { HiHeart } from 'react-icons/hi'
import { MdOutlineManageSearch } from 'react-icons/md'
import { PiCarThin } from 'react-icons/pi'
import { SlBasket } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const AppMenu = () => {
    return (
        <div className="flex justify-around items-center py-2 bg-white border-t border-gray-200 md:border-none">
            <Link to="/" className="flex flex-col items-center text-gray-700">
                <BiHome className="h-6 w-6" />
                <span className="text-xs">Главная</span>
            </Link>
            <Link to="/catalog" className="flex flex-col items-center text-gray-700">
                <MdOutlineManageSearch className="h-6 w-6" />
                <span className="text-xs">Каталог</span>
            </Link>
            <Link to="/" className="flex flex-col items-center text-gray-700">
                <SlBasket className="h-6 w-6" />
                <span className="text-xs">Корзина</span>
            </Link>
            <Link to="/" className="flex flex-col items-center text-gray-700">
                <GoHeart className="h-6 w-6" />
                <span className="text-xs">Избранное</span>
            </Link>
            <Link to="/" className="flex flex-col items-center text-gray-700">
                <FaRegUser className="h-6 w-6" />
                <span className="text-xs">Войти</span>
            </Link>

        </div>
    )
}

export default AppMenu
