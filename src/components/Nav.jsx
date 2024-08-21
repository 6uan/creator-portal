import { MdGridView, MdAddToPhotos } from 'react-icons/md'

const Nav = () => {
  return (
    <nav className="fixed top-0 w-screen h-12 bg-[#5C4742]">
      {/* Flex Box for NAV */}
      <div className="flex w-8/12 mx-auto">
        <div className="h-12 w-24 font-semibold flex justify-center items-center text-2xl">
          Artify
        </div>
        <div>
          <MdGridView className="h-12 size-8" />
        </div>
        <div>
          <MdAddToPhotos className="h-12 size-7" />
        </div>
      </div>
    </nav>
  )
}

export default Nav
