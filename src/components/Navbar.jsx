import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = (props) => {
  let Links = [
    { name: "Home", link: 'home' },
    { name: "About", link: 'about' },
    { name: "Projects", link: 'project' }
  ];
  let [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled ? 'glass py-2' : 'bg-transparent py-4'}`}>
      <nav className="container mx-auto flex items-center justify-between px-6 lg:px-8">
        
        {/* Logo */}
        <div className="font-heading font-bold text-2xl tracking-tighter text-primary cursor-pointer hover:scale-105 transition-transform">
          <a onClick={() => props.scrollToTarget('home')}>Aarsh<span className="text-foreground">.</span></a>
        </div>

        {/* Mobile Menu Icon */}
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-1/2 -translate-y-1/2 cursor-pointer md:hidden text-foreground hover:text-primary transition-colors'>
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Navigation Links */}
        <ul className={`md:flex md:items-center md:pb-0 md:bg-transparent absolute md:static w-full md:w-auto left-0 md:pl-0 pl-9 transition-all duration-500 ease-in-out ${open ? 'top-full bg-card/95 backdrop-blur-xl border-b border-white/10 pb-8' : 'top-[-500px] bg-transparent'}`}>
          {Links.map(link => (
            <li className="md:ml-8 my-7 md:my-0 font-medium" key={link.name} onClick={() => setOpen(false)}>
              <a 
                onClick={() => props.scrollToTarget(link.link)}
                className='text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer text-lg md:text-base relative group'
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
