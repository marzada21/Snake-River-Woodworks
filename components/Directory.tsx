import '../css/directory.css';
import { IoMdArrowForward } from "react-icons/io";

export default function Directory() {
  return (
    <>
      <div className="directory-container m-0 p-0 text-white">
        <div className="directory m-0 p-0 flex justify-between items-center">

          <div className="flex flex-1 justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-4xl text-center">Cutting Boards</h2>
              <button className="directory-btn directory-side-btn text-4xl flex justify-center items-center">
                <a href="">
                  <IoMdArrowForward />
                </a>
              </button>
            </div>
          </div>

          <div className="flex flex-1 justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-4xl text-center">Bowls</h2>
              <button className="directory-btn directory-mid-btn text-4xl flex justify-center items-center">
                <a href="">
                  <IoMdArrowForward />
                </a>
              </button>
            </div>
          </div>

          <div className="flex flex-1 justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-4xl text-center">Shop All</h2>
              <button className="directory-btn directory-side-btn text-4xl flex justify-center items-center">
                <a href="">
                  <IoMdArrowForward />
                </a>
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
