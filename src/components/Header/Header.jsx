import React from 'react';

export const Header = () => {
  return (
    <header className='w-full h-[80px] leading-[80px] flex items-center'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* ____________________________ LOGO*/}
          <div className='flex items-center gap-[10px]'>
            <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>
              M
            </span>
            <div className='leading-[20px]'>
              <h2 className='text-xl text-smallTextColor font-[700]'>Muhib</h2>
              <p className='text-smallTextcolor text-[14px] font-[500]'>
                personal
              </p>
            </div>
          </div>
          {/* ____________________________LOGO END */}
          {/* ____________________________ MENU START */}
          <div className='menu'>
            <ul className='flex items-center gap-10'>
              <li><a className='text-smallTextColor font-[600]' href='#about'>About</a></li>
              <li><a className='text-smallTextColor font-[600]' href='#services'>Services</a></li>
              <li><a className='text-smallTextColor font-[600]' href='#portfolio'>Portfolio</a></li>
              <li><a className='text-smallTextColor font-[600]' href='#contact'>Contact</a></li>
            </ul>
          </div>
          {/* ____________________________MENU END*/}

          {/* ____________________________MENU RIGHT*/}
          <div className="flex items-center gap-4">
            <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300'>
              <i className='ri-send-plane-line'></i>Let's talk
            </button>
            <span className='text-2xl text-smallTextColor md:hidden cursor-pointer'>
              <i className='ri-menu-line'></i>
            </span>
          </div>
          {/* ____________________________MENU RIGHT END*/}
        </div>
      </div>
    </header>
  );

}