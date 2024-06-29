import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
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
        <div className='hidden max-lg:block'>
          <details className='relative'>
            <summary className='list-none'>
              <img src={hamburger} alt='hamburger icon' width={25} height={25} className='cursor-pointer' />
            </summary>
            <ul className='absolute right-full list-none w-max bg-coral-red rounded-[5px] p-4'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='font-montserrat leading-normal text-lg h-full w-full inset-0 scale-0 transition-all duration-300
                      group-hover:scale-100 hover:bg-white/30 hover:m-1 hover:p-1 hover:rounded-lg'
                  >
                    {item.label}
                  </a>
                </li>
              ))} 
            </ul>
          </details>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
