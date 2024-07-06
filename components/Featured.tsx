import '../css/featured.css';

export default function Featured() {
  return (
    <>
      <div className="ft-container">
        <div className="ft">
          <div className="ft-heading text-center">
            <h2 className="text-4xl font-bold pb-2">Featured</h2>
            <h4 className="text-2xl font-normal">Some of our Favorites</h4>
          </div>

          <div className="ft-items flex justify-between items-center">

            <div className="ft-item min-w-fit text-center">
              <img src="/feat-board.jpg" alt="" className="ft-item-img" />
              <h4 className="text-xl font-semibold">Title</h4>
              <h5 className="text-lg font-semibold">$0.00</h5>
            </div>

            <div className="ft-item min-w-fit text-center">
              <img src="/feat-bowl.jpg" alt="" className="ft-item-img" />
              <h4 className="text-xl font-semibold">Title</h4>
              <h5 className="text-lg font-semibold">$0.00</h5>
            </div>

            <div className="ft-item min-w-fit text-center">
              <img src="/feat-board-2.jpg" alt="" className="ft-item-img" />
              <h4 className="text-xl font-semibold">Title</h4>
              <h5 className="text-lg font-semibold">$0.00</h5>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
 