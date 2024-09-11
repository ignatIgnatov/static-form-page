import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

    const handleOpenHamburgerMenu = () => {
        setOpenHamburgerMenu(!openHamburgerMenu);
    };

    return (
        <nav className="w-full h-[180px] bg-transparent">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center h-[180px] p-4 lg:p-0">

                <div className="text-2xl font-semibold cursor-pointer">
                    LOGO HERE
                </div>

                <div className="hidden lg:flex justify-between items-center gap-20 text-lg">
                    <p className="cursor-pointer">Начало</p>
                    <p className="cursor-pointer">За нас</p>
                    <p className="cursor-pointer">Продукти</p>
                    <p className="cursor-pointer">Портфолио</p>
                    <p className="cursor-pointer">Контакти</p>
                </div>

                <div className="lg:hidden">
                    <button onClick={handleOpenHamburgerMenu} className="text-3xl focus:outline-none">
                        {openHamburgerMenu ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            <div
                className={`lg:hidden bg-white shadow-lg absolute top-[180px] left-0 w-full transition-all duration-300 ease-in-out ${openHamburgerMenu ? "z-10 flex flex-col items-center" : "hidden"
                    }`}
            >
                <ul className="flex flex-col items-center gap-6 py-6 text-lg">
                    <li>
                        <p>Начало</p>
                    </li>
                    <li>
                        <p>За нас</p>
                    </li>
                    <li>
                        <p>Продукти</p>
                    </li>
                    <li>
                        <p>Портфолио</p>
                    </li>
                    <li>
                        <p>Контакти</p>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
