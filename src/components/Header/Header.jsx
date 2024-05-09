import amazon_logo from "../../assets/amazon_logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMenuOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header>
        {/* Top nav */}
        <div className="bg-amazon_blue flex items-center p-1 flex-grow py-2">
            <div className="mt-2 flex items-center flew-grow sm:flew-grow-0">
                <img 
                src={amazon_logo} 
                alt={amazon_logo} 
                className="cursor-pointer  w-[150px] h-[40px] object-contain" 
                />
            </div>
            {/* Search */}
            <div className="hidden sm:flex bg-yellow-400 rounded-md items-center h-10 hover:bg-yellow-500 flex-grow  cursor-pointer">
                <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 " />
                <IoSearchOutline className="h-12 p-4 text-white" />
            </div>

            {/* Right */}
            <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                <div className="Link">
                    <p>Hello Esther Ronnie</p>
                    <p className="font-extrabold md:text-sm">Account & Lists</p>
                </div>

                <div className="Link">
                    <p>Returns</p>
                    <p className="font-extrabold md:text-sm">Orders</p>
                </div>

                <div className="relative Link flex items-center ">
                    <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 flex items-center justify-center p-2 rounded-full text-black font-bold">0</span>
                    {/* <ShoppingCartIcon  /> */}
                    <AiOutlineShoppingCart className="h-10 text-4xl"/>
                    
                    <p className="font-extrabold md:inline md:text-sm hidden mt-2">Basket</p>
                </div>
            </div>
        </div>
        {/* Bottom nav */}
        <div className="flex items-center space-x-3 p-2 pl-6  bg-amazon_blue-light text-white">
            <p className="Link flex items-center">
                <IoMenuOutline className="h-6 mr-1 text-4xl" />
                All 
            </p>
            <p className="Link">Prime Video</p>
            <p className="Link">Amazon Business</p>
            <p className="Link">Today's Deals</p>
            <p className="Link hidden lg:inline ">Electronics</p>
            <p className="Link hidden lg:inline ">Food & Grocery</p>
            <p className="Link hidden lg:inline ">Prime</p>
            <p className="Link hidden lg:inline ">Buy Again</p>
            <p className="Link hidden lg:inline ">Shopper Toolkit</p>
            <p className="Link hidden lg:inline ">Health & Person</p>
        </div>
    </header>
)
}

export default Header
