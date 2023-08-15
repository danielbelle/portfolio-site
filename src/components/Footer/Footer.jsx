import React from 'react'

export const Footer = () => {
  
  const year = new Date().getFullYear(); 
  
  return (

    <footer className='bg-[#12141e] pt-12'>

      {/** footer top */}

      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful products?
            </h2>

            <a href='#contact'>
              <button className='bg-primaryColor text-white font-[450] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                <i className='ri-mail-line'> Hire me</i>
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae qui optio reiciendis ab illo earum
            </p>

            <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
              <span className='text-gray-300 font-[600] text-[15px]'>
                Follow me:
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center hover:bg-primaryColor'>
                <a href='#linkedin' className='text-gray-300 font-[500] text-[18px]'>
                  <i className='ri-linkedin-line'></i>
                </a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center hover:bg-primaryColor'>
                <a href='#github' className='text-gray-300 font-[500] text-[18px]'>
                  <i className='ri-github-line'></i>
                </a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center hover:bg-primaryColor'>
                <a href='#youtube' className='text-gray-300 font-[500] text-[18px]'>
                  <i className='ri-youtube-line'></i>
                </a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center hover:bg-primaryColor'>
                <a href='#facebook' className='text-gray-300 font-[500] text-[18px]'>
                  <i className='ri-facebook-line'></i>
                </a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center hover:bg-primaryColor'>
                <a href='#instagram' className='text-gray-300 font-[500] text-[18px]'>
                  <i className='ri-instagram-line'></i>
                </a>
              </span>
            </div>
          </div>
        </div>

        <div>
          <ul className='flex items-center gap-10 mt-10 justify-center'>
            <li><a className='text-gray-400 font-[600]' href='#about'>About</a></li>
            <li><a className='text-gray-400 font-[600]' href='#services'>Services</a></li>
            <li><a className='text-gray-400 font-[600]' href='#portfolio'>Portfolio</a></li>
            <li><a className='text-gray-400 font-[600]' href='#contact'>Contact</a></li>
          </ul>
        </div>
      </div>

      {/** footer top end */}

      {/** footer bottom end */}

      <div className='bg-[#1b1e29] py-5 mt-14'>
        <div className='container'>
          <div className='flex items-center justify-center sm:justify-between'>
            <div className='hidden sm:block'>
              <div className='flex items-center gat-[10px]'>
                <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center mt-2'>
                  D
                </span>

                <div className='leading-[20px] ml-2'>
                  <h2 className='text-gray-200 font-[500] text-[18px]'>
                    Daniel
                  </h2>
                  <p className='text-gray-400 font-[500] text-[18px]'>
                    Personal
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className='text-gray-400 text-[14px] mt-1'>
              &#169; Copyright {year} developed by Daniel — All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/** footer bottom end */}

    </footer>
  )
}
