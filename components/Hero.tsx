import '../css/hero.css';

export default function Hero() {
  return (
    <>
      <div className="bg-hero-bg bg-center bg-cover text-white">
        <div className="bg-overlay h-screen flex flex-col justify-center">
          <div className="ml-20">
            <h1 className="hook text-8xl font-semibold mb-6 leading-regular tracking-widest
            w-7/12">
              Discover Hand-Crafted Excellence
            </h1>
              <a href="/products" className='btn btn-style700 flex items-center justify-center w-80 h-20 border-2 border-white text-3xl font-medium'>
                Shop Now
              </a>
          </div>
        </div>
      </div>
    </>
  )
}