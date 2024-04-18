import { Menu, X } from 'lucide-react';
import { useState } from 'react';
  
const Navbar = (props) => {
  // const {scrollToTarget}=props;
  let Links=[
    {name:"Home",link:'home'},
    {name:"About",link:'about'},
    {name:"Projects",link:'project'}
    
  ];
  let [open, setOpen] =useState(false);
  return (
    <div className='pl-8 w-screen bg-white fixed top-0 left-0 z-50'>
    <nav className="flex  text-base font-medium justify-between w-screen m-3 items-center">
      <div className="font-semibold text-2xl gap-1 ">
        <a className=" hover:text-indigo-600 ">Aarsh</a>
      </div>
      <div  onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {
              open ? <X/> : <Menu/>
          }
      </div>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 md:mr-24 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700  ${open ? 'top-14':'top-[-500px]'}`}>
        {Links.map(links=>(
          <li className="m-4 md:mr-5  hover:text-indigo-600 cursor-pointer" key={links.name} onClick={()=>setOpen(!open)}>
            <a className='hover:md:border-b-2 md:pb-1 hover:md:border-indigo-500 transition-all' onClick={()=>{props.scrollToTarget(links.link)}}>{links.name}</a>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
