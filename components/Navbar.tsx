import '../css/navbar.css';

export default function Navbar() {
  return (
    <>
      <nav className='w-full flex flex-row items-center justify-between absolute text-white mt-12 pr-7'>
        <div className="srw-container text-4xl tracking-widest pl-20">
          <a href="/">Snake River Woodworks</a>
        </div>

        <div className="flex flex-row items-center justify-center">
          <a href="/products" className='flex flex-col leading-normal mx-7'>
            <span className="nav-link-number">01</span>
            <span className="nav-link-name hover-underline-animation">Products</span>
          </a>
          <a href="/custom" className='flex flex-col leading-normal mx-7'>
            <span className="nav-link-number">02</span>
            <span className="nav-link-name hover-underline-animation">Custom</span>
          </a>
          <a href="/care" className='flex flex-col leading-normal mx-7'>
            <span className="nav-link-number">03</span>
            <span className="nav-link-name hover-underline-animation">Care</span>
          </a>
          <a href="/about" className='flex flex-col leading-normal mx-7'>
            <span className="nav-link-number">04</span>
            <span className="nav-link-name hover-underline-animation">About</span>
          </a>
          <a href="/cart" className='flex flex-col leading-normal mx-7'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7' viewBox="0 0 576 512">
              <path 
                fill='#ffffff'
                d="M24 0H0V48H24 76.1l60.3 316.5 3.7 19.5H160 488h24V336H488 179.9l-9.1-48H496L576 32H122l-2.4-12.5L115.9 0H96 24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"
              />
            </svg>
          </a>
        </div>

      </nav>
    </>
  )
}
