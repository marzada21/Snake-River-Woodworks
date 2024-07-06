import '../css/navbar.css';
import { IoMdCart } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="text-white absolute flex justify-between items-center w-full">
      
      <div className='srw-container flex-1'>
        <a href="/" className='srw font-light'>Snake River Woodworks</a>
      </div>

      <div className='nav-links flex'>
        <a href="/" className='flex flex-col items-start text-white font-light'>
          <span className='nav-link-number'>01</span>
          <span className='nav-link-name hover-underline-animation'>Home</span>
        </a>
        <a href="/shop" className='flex flex-col items-start text-white font-light'>
          <span className='nav-link-number'>02</span>
          <span className='nav-link-name hover-underline-animation'>Shop</span>
        </a>
        <a href="/about" className='flex flex-col items-start text-white font-light'>
          <span className='nav-link-number'>03</span>
          <span className='nav-link-name hover-underline-animation'>About</span>
        </a>
      </div>

      <div className='cart-container m-0'>
        <IoMdCart />
      </div>
    </nav>
  )
}