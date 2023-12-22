import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const First: React.FC = () => {
  return (
    <div className="bg-white h-screen flex flex-col px-[42px]">
      <header className="text-neutral-800 text-[32px] font-bold max-w-[1189px] mt-[62px] max-md:max-w-full">
        <Link to="/">Notes</Link>
      </header>
      <div className="text-neutral-800 text-[72px] 2xl:mt-[259px] xl:mt-[129px] lg:mt-[99px] md:mt-[79px] sm:mt-[59px] mt-[39px] max-w-[621px] self-center justify-self-center max-md:max-w-full max-md:text-4xl">
        <span>Welcome to</span> <span className="font-bold">Notes</span>
      </div>
      <CreateFolderForm />
    </div>
  )
}

const CreateFolderForm: React.FC = () => {
  const [folderName, setFolderName] = useState('')
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFolderName(e.target.value)
  }

  const handleSubmit = (): void => {
    if (folderName.trim() === '') {
      alert('Please enter a folder name')
    } else {
      console.log('Create', folderName)
      // Use useNavigate to navigate to a new page + pass the folder as parameter
      navigate('/folders')
    }
  }

  const handleClick = (): void => {
    handleSubmit()
  }

  return (
    <form className="w-[855px] items-center self-center border flex gap-2.5 mt-[28px] pl-2.5 pr-20 py-2.5 rounded-lg border-solid border-stone-300 max-md:max-w-full" onSubmit={handleSubmit}>
      <button
        type="button"
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault() // prevent warning being shown twice from onClick and onKeyDown
            handleSubmit()
          }
        }}
        className="flex items-center justify-center w-[19px] h-[19px] rounded-3xl bg-transparent border-none outline-none hover:outline-black ... focus:outline-none active:outline-none"
      >
        <img
          alt='icon'
          src={require('./plus.png')}
          className="aspect-square object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full my-auto"
        />
      </button>
      <input
        type="text"
        id='folderName'
        name='folderName'
        placeholder="Create your first folder here"
        value={folderName}
        onChange={handleChange}
        className="text-stone-800 text-lg tracking-tight self-stretch grow whitespace-nowrap outline-none"
      />
    </form>
  )
}

export default First
