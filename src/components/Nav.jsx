// import { hamburger } from "../assets/icons";
// import { headerLogo } from "../assets/images";
// import { navLinks } from "../constants";

// const Nav = () => {
//   return (
//     <header className='padding-x py-8 absolute z-10 w-full'>
//       <nav className='flex justify-between items-center max-container'>
//         <a href='/'>
//           <img
//             src={headerLogo}
//             alt='logo'
//             width={129}
//             height={29}
//             className='m-0 w-[129px] h-[29px] transition duration-500 hover:scale-125'
//           />
//         </a>
//         <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
//           {navLinks.map((item) => (
//             <li key={item.label}>
//               <a
//                 href={item.href}
//                 className='font-montserrat leading-normal text-lg text-slate-gray hover:font-bold'
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <div className='hidden max-lg:block cursor-pointer onClick={toggleMenu}'>
//           <img src={hamburger} alt='hamburger icon' width={25} height={25} />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Nav;

import React, { useState, useEffect, useRef } from 'react';
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isMenuOpen]);

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px] transition duration-500 hover:scale-125'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:font-bold'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='max-lg:block cursor-pointer' onClick={toggleMenu}>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col items-center justify-center z-20 transition duration-300 ease-in-out'
        >
          <button onClick={toggleMenu} className='absolute top-4 right-4 text-white text-2xl'>
            &#x2715;
          </button>
          <ul className='flex flex-col items-center gap-4'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-white hover:font-bold'
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;



