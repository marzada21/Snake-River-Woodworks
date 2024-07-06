import '../css/hero.css';

export default function Hero() {
  return (
    <div className="hero-container bg-center bg-no-repeat bg-cover">
      <div className="hero m-0 p-0 text-white flex flex-col justify-center">
        <div>
          <h1 className="hook">Discover Hand-Crafted Excellence</h1>
          <a href="/shop" className='shop-btn btn-style700 flex justify-center items-center'>
            Shop Now
          </a>
        </div>
      </div>
    </div>
  )
}
