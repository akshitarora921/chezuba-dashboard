import Image from "next/image";
function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`absolute top-0 right-0 h-screen bg-white flex flex-col w-full items-center z-20 transition-all duration-1000 md:hidden ${
        isOpen ? " translate-x-0 opacity-100" : "opacity-0 translate-x-full "
      }`}
    >
      <button className='absolute top-10 right-10' onClick={onClose}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
      <div className='my-8'>
        <Image
          src='/images/logo.png'
          alt='chezuba logo'
          height='109'
          width='153'
          objectFit='contain'
        />
      </div>
      <div className='relative'>
        <Image
          src='/images/userImage.png'
          alt='user-image'
          height='140'
          width='140'
          objectFit='contain'
          className='rounded-full'
        />
        <h2 className='text-2xl text-[#BB421C] ml-2'>Sukhendra</h2>
        <h2 className='text-2xl text-[#BB421C] ml-2'>Rompally</h2>
      </div>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-lg text-[#2D0CFB]'>Home</li>
        <li className='text-lg text-[#D6B7B7]'>Calender</li>
        <li className='text-lg text-[#D6B7B7]'>Projects</li>
        <li className='text-lg text-[#D6B7B7]'>My Application</li>
        <li className='text-lg text-[#D6B7B7] flex items-center gap-1'>
          Extras
          <svg
            width='12'
            height='13'
            viewBox='0 0 12 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 6.5L0.75 12.9952L0.75 0.00480938L12 6.5Z'
              fill='#B5A8A8'
            />
          </svg>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
