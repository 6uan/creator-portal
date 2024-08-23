import { MdGridView, MdAddToPhotos } from "react-icons/md";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="fixed top-0 w-screen h-12 bg-[#5C4742] z-20">
      {/* Flex Box for NAV */}
      <div className="flex flex-row w-8/12 mx-auto justify-between overflow-hidden ">
        <div className="flex justify-center items-center space-x-5">
          <Link to="/">
            <span className="text-neutral-100 font-semibold text-2xl">
              Artistfy
            </span>
          </Link>
          <form action="search" className="">
            <input
              type="text"
              placeholder="Searching..."
              className="rounded-sm pl-2 p-0.5"
            />
          </form>
        </div>
        <div className="flex text-neutral-100 space-x-5">
          <Link to="/">
            <div className="flex items-center">
              <MdGridView className="h-12 size-8 text-[#a5978b]" />
              <span className="text-xl pl-2">View All</span>
            </div>
          </Link>
          <Link to="/add-artist">
            <div className="flex items-center">
              <MdAddToPhotos className="h-12 size-7 text-[#a5978b]" />
              <span className="text-xl pl-2">Add Artist</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
