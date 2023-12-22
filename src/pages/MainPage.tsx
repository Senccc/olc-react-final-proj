import React/*, { useState } */ from 'react'
import { Link } from 'react-router-dom'

const Main: React.FC = () => {
  return (
    <div className="bg-white h-screen flex flex-col px-[42px]">
      <Sidebar />
      <NotesPage />
    </div>
  )
}

const Sidebar: React.FC = () => {
  //   const [isHovering, setIsHovering] = useState(false)

  //   const handleMouseEnter = () => {
  //     setIsHovering(true)
  //   }

  //   const handleMouseLeave = () => {
  //     setIsHovering(false)
  //   }

  return (
    <aside className="fixed flex flex-col w-[30%] h-screen ">
      <div className="w-[75.2%] h-fit">
        <header className="text-neutral-800 text-[32px] font-bold max-w-[1189px] mt-[62px] max-md:max-w-full">
          <Link to="/">Notes</Link>
        </header>
        <div className="flex flex-col mt-[14px] ">
          <div className="flex flex-row justify-between items-center">
            <h6 className="text-[16px] text-[#242424] font-medium leading-normal tracking-wider opacity-50">
              Folders
            </h6>
            <div className="flex w-fit h-fit gap-[10px]">
              <img
                alt='icon'
                src={require('./plus-circle.png')}
                className="aspect-square object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full my-auto"
              />
              <img
                alt='icon'
                src={require('./ArrowUp.png')}
                className="aspect-square object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[5px] mt-4">
            <p className="p-[10px] hover:bg-[#F8F8F8] hover:rounded-[8px] text-[19.2px] text-[#242424] font-normal hover:font-medium leading-normal tracking-wide">
              College
            </p>
            <p className="p-[10px] hover:bg-[#F8F8F8] hover:rounded-[8px] text-[19.2px] text-[#242424] font-normal hover:font-medium leading-normal tracking-wide">
              Work
            </p>
            <p className="p-[10px] hover:bg-[#F8F8F8] hover:rounded-[8px] text-[19.2px] text-[#242424] font-normal hover:font-medium leading-normal tracking-wide">
              Home
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-[32px] ">
          <div className="flex flex-row justify-between items-center">
            <h6 className="text-[17.067px] text-[#242424] font-medium leading-normal tracking-wider opacity-50">
              College
            </h6>
            <img
              alt='icon'
              src={require('./ArrowUp.png')}
              className="aspect-square object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full my-auto"
            />
          </div>
          <div className="flex flex-col gap-[5px] mt-4">
            <div className="flex justify-between items-center hover:bg-[#F8F8F8] hover:rounded-[8px] p-[10px]">
              <p className="text-[19.2px] text-[#242424] font-normal leading-normal tracking-wide">
                Calculus
              </p>
              <div className="scale-0 absolute top-0 right-0 w-[18px] overflow-hidden shrink-0 max-w-full my-auto">
                <img
                 alt='icon'
                 src={require('./Trash.png')}
                 className="aspect-square object-contain hover:scale-100 object-center w-[18px] overflow-hidden shrink-0 max-w-full my-auto"
                 style={{ display: 'none' }}
                />
              </div>
            </div>
            <div className="flex justify-between items-center hover:bg-[#F8F8F8] hover:rounded-[8px] p-[10px]">
              <p className="text-[19.2px] text-[#242424] font-normal leading-normal tracking-wide">
                Physics
              </p>
              <div className="scale-0 absolute top-0 right-0 w-[18px] overflow-hidden shrink-0 max-w-full my-auto">
                <img
                 alt='icon'
                 src={require('./Trash.png')}
                 className="aspect-square object-contain hover:scale-100 object-center w-[18px] overflow-hidden shrink-0 max-w-full my-auto"
                 style={{ display: 'none' }}
                />
              </div>
            </div>
            <div className="flex justify-between items-center hover:bg-[#F8F8F8] hover:rounded-[8px] p-[10px]">
              <p className="text-[19.2px] text-[#242424] font-normal leading-normal tracking-wide">
                Math
              </p>
              <div className="scale-0 absolute top-0 right-0 w-[18px] overflow-hidden shrink-0 max-w-full my-auto">
                <img
                 alt='icon'
                 src={require('./Trash.png')}
                 className="aspect-square object-contain hover:scale-100 object-center w-[18px] overflow-hidden shrink-0 max-w-full my-auto"
                 style={{ display: 'none' }}
                />
              </div>
            </div>
            <div className="flex justify-between items-center hover:bg-[#F8F8F8] hover:rounded-[8px] p-[10px]">
              <p className="text-[19.2px] text-[#242424] font-normal leading-normal tracking-wide">
                Chem
              </p>
              <div className="scale-0 absolute top-0 right-0 w-[18px] overflow-hidden shrink-0 max-w-full my-auto">
                <img
                 alt='icon'
                 src={require('./Trash.png')}
                 className="aspect-square object-contain hover:scale-100 object-center w-[18px] overflow-hidden shrink-0 max-w-full my-auto"
                 style={{ display: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

const NotesPage: React.FC = () => {
  return (
    <section className="absolute top-0 right-0 flex flex-col justify-center items-center w-[70%] h-screen border-l-2">
      <form className="flex flex-col w-[95%] h-full font-normal leading-normal">
        <p className="w-fit h-fit mt-[53px] text-[17.067px]">College / new</p>
        <input
          className="mt-[29px] text-[42.67px] font-bold tracking-wider"
          type="text"
          placeholder="Title"
        />
        <textarea
          rows={3}
          className="mt-[12px] text-[19.2px] tracking-wide"
          placeholder="Description"
        />
        <textarea
          rows={25}
          className="mt-[32px] text-[19px]"
          placeholder="Contents"
        />
        <button
          className="absolute text-[18px] z-10 bottom-[10%] right-[10%] w-[10%] h-fit p-[10px] bg-[#F8F8F8] border-[1px] border-solid border-[#BEBEBE] rounded-lg drop-shadow-xl "
          type="submit"
        >
          <div className="flex justify-center items-center gap-[10px] ">
          <img
            alt='icon'
            src={require('./ArrowDown.png')}
            className="aspect-square object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full my-auto"
          />
            <p>Save</p>
          </div>
        </button>
      </form>
    </section>
  )
}
// const [isSidebarOpen, setIsSidebarOpen] = useState(false)

// const handleSidebarToggle = (): void => {
//   setIsSidebarOpen(!isSidebarOpen)
// }

// return (
//   <div className="flex h-screen">
//     <button
//       onClick={handleSidebarToggle}
//       className="px-4 py-2 bg-gray-200 outline-black rounded-lg"
//     >
//       =
//     </button>
//     <div className={`w-64 bg-white outline-black ${isSidebarOpen ? 'block' : 'hidden'}`}>
//       {/* Sidebar Content */}
//     </div>
//     <div className={`w-full bg-white ${isSidebarOpen ? 'w-5/6' : 'w-full'}`}>
//       {/* Main Content */}
//     </div>
//   </div>
// )

export default Main
