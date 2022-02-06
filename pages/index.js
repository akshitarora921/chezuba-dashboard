import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Paper from "../components/paper";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div>
      <Head>
        <title>Chezuba</title>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Employee volunteering and employee giving software that enables corporate social responsibility. Your employees can volunteer with NonProfits in 76 ...'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col justify-center items-center w-full min-h-screen bg-[#E5E5E5]'>
        <div className='p-4 w-full md:hidden'>
          <div className='flex justify-between p-6 shadow-xl rounded-3xl bg-white'>
            <div className='mx-3 flex items-center'>
              <Image
                src='/images/mobile-logo.png'
                alt='chezuba logo'
                height='50'
                width='50'
                objectFit='contain'
              />
              <h3 className='text-2xl ml-1 tracking-tight uppercase text-gray-600'>
                chezuba
              </h3>
            </div>
            <button
              className='bg-white rounded p-4 w-min '
              onClick={() => setIsOpen(!isOpen)}
            >
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
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <div className='flex w-full max-w-7xl p-4 gap-3'>
          <div className='flex-col items-center w-max p-6 rounded-3xl top-0 left-0 min-h-fit md:flex hidden'>
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
                src='/images/user-image.png'
                alt='user-image'
                height='120'
                width='120'
                objectFit='contain'
                className='rounded-full'
              />
              <h2 className='text-2xl text-[#BB421C] ml-2'>Sukhendra</h2>
              <h2 className='text-2xl text-[#BB421C] ml-2'>Rompally</h2>
            </div>
            <ul className='mt-6 flex flex-col gap-3'>
              <li className='text-lg cursor-pointer hover:text-[#2D0CFB] text-[#2D0CFB]'>
                Home
              </li>
              <li className='text-lg cursor-pointer hover:text-[#2D0CFB] text-[#D6B7B7]'>
                Calender
              </li>
              <li className='text-lg cursor-pointer hover:text-[#2D0CFB] text-[#D6B7B7]'>
                Projects
              </li>
              <li className='text-lg cursor-pointer hover:text-[#2D0CFB] text-[#D6B7B7]'>
                My Application
              </li>
              <li className='text-lg cursor-pointer hover:text-[#2D0CFB] text-[#D6B7B7] flex items-center gap-1'>
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
          <div className='inline-grid gap-4'>
            <div className='grid md:grid-cols-2 gap-4'>
              <Paper>
                <div className='flex justify-between items-center'>
                  <h2 className='text-3xl font-light'>Activity Calendar</h2>
                  <Link href='/calender'>
                    <a className='text-blue-500'> View all</a>
                  </Link>
                </div>
                <div className='flex flex-col'>
                  <div className='flex flex-col w-full gap-2 mt-4'>
                    <h4 className='text-md font-normal'>Today</h4>
                    <div className='flex bg-gradient-to-r from-[#494FDE]/100 to-[#494FDE]/40 p-3 text-white w-full rounded-2xl '>
                      <p>Donate Books</p>
                    </div>
                  </div>
                  <div className='flex flex-col w-full gap-2 my-3'>
                    <h4 className='text-md font-normal'>Tomorrow</h4>
                    <div className='flex bg-gradient-to-r from-[#494FDE]/100 to-[#494FDE]/40 p-3 text-white w-full rounded-2xl '>
                      <p>Donate Books</p>
                      <p>Round 2</p>
                    </div>
                  </div>
                </div>
              </Paper>
              <Paper>
                <div className='flex justify-between items-center'>
                  <h2 className='text-3xl font-light'>User Activity</h2>
                  <Link href='/user-activity'>
                    <a className='text-blue-500'> View all</a>
                  </Link>
                </div>
                <div className='flex p-2 gap-6 justify-around'>
                  <div className='flex mt-4 justify-center items-center rounded-full border-[15px] w-40 h-40 border-black/20 object-contain'>
                    <p className='text-sm text-center'>
                      <span className='text-4xl font-bold'>0 hrs</span>
                      <br />
                      Volunteer
                      <br /> experience
                    </p>
                  </div>
                  <div className='flex relative'>
                    <Image
                      src='/images/avatar.png'
                      objectFit='contain'
                      alt='chezuba logo'
                      height='160'
                      width='160'
                    />
                  </div>
                </div>
              </Paper>
            </div>
            <div className='grid md:grid-cols-2 gap-4'>
              <Paper>
                <div className='flex justify-between items-center'>
                  <h2 className='text-3xl font-light'>Leaderboard</h2>
                  <Link href='/leaderboard'>
                    <a className='text-blue-500'> View all</a>
                  </Link>
                </div>
                <div className='flex flex-col gap-2 mt-4'>
                  {Array(5)
                    .fill(2)
                    .map((_row, index) => (
                      <div
                        key={index}
                        className='flex justify-between bg-gradient-to-r from-[#DE496E]/100 to-[#DE496E]/40 p-3 text-white w-full rounded-2xl'
                      >
                        <div className='flex gap-6'>
                          <p>1.</p>
                          <p>Fatima</p>
                        </div>
                        <div className=''>360 hrs</div>
                      </div>
                    ))}
                </div>
              </Paper>
              <div className='flex flex-1 flex-col gap-4'>
                <Paper>
                  <div className='flex justify-between items-center'>
                    <h2 className='text-3xl font-light'>My Applications</h2>
                    <Link href='/calender'>
                      <a className='text-blue-500'> View all</a>
                    </Link>
                  </div>
                  <div className='flex mt-3 justify-between bg-gradient-to-r from-[#C4D84B]/100 to-[#C4D84B]/40 p-3 text-white w-full rounded-2xl'>
                    <p>Donate Books</p>
                    <p className='text-[#A35E5E]'>Pending</p>
                  </div>
                </Paper>
                <Paper>
                  <div className='flex justify-between items-center'>
                    <h2 className='text-3xl font-light'>Testimonials</h2>
                  </div>
                  <div className='flex flex-col items-end text-justify leading-[21px] mt-3 text-sm'>
                    The Vaccination awareness session conducted by by APL CSR
                    Team motivated me to educate people around me I encouraged
                    10 people to get vaccinated and another 20 people to get
                    registered on COWIN portal. Educating them about the
                    importance and benifits of COVID-19 vaccination made them
                    feel more confident and safe to take right action
                    <br />
                    <cite className='mt-2'>- Shivani Vishwadev</cite>
                  </div>
                </Paper>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
