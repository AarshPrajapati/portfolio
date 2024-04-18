import React from 'react'
import Typewriter from 'typewriter-effect'
import { Button } from "@/components/ui/button"
import { Facebook, FileDown, Github, Instagram, Linkedin, Send } from 'lucide-react'

const Home = (props) => {
  return (
    <div ref={props.home} className='w-screen m-auto p-8 pr-0  top-0 left-0 mt-16 lg:flex md:h-[130vh] lg:h-screen  justify-between gap-x-8'>
        <div className='lg:flex w-1/2 lg:h-5/6 lg:flex-col lg:w-1/2 sm:w-max p-4 md:p-10 justify-center  items-center'>
            <div className='w-screen md:w-auto md:line-clamp-4 list-inside whitespace-normal'>
            <div className='md:text-sm uppercase font-bold mb-4 text-blue-800 tracking-[4px]'>Software Developer</div>
            <h2 className='text-4xl w-[80%] overflow-hidden md:text-6xl text-ellipsis  md:w-[90%] leading-snug  antialiased font-semibold mb-6'>Hello , my name is Aarsh Prajapati</h2>
            <h3 className='tracking-normal flex text-xl'>I am &nbsp; 
              <Typewriter
            options={{
                strings: ['Web Designer', 'Web Developer' , 'Softwar Engineer'],
                autoStart: true,
                loop: true,
              }}
            /></h3>
            </div>
            <div className='flex self-start my-6 min-[2300px]:ml-32'>
            <Button className='bg-indigo-600 hover:bg-indigo-500 h-10 md:text-base'>Contact me &nbsp; <Send className='mt-1'  size='15px'/></Button>
            <Button className=' h-10 text-base ml-6'>Download CV &nbsp; <FileDown size='17px'/></Button>
            </div> 
            <div className='flex self-start mt-4 min-[2300px]:ml-32'>
             <a className='cursor-pointer mr-4' target='_blank' href='https://www.instagram.com/aarsh._.802/'><Instagram className='text-indigo-600 hover:text-indigo-900' /></a>
             <a className='cursor-pointer mr-4' target='_blank' href='https://github.com/AarshPrajapati'> <Github className='text-indigo-600 hover:text-indigo-900'/></a>
             <a className='cursor-pointer mr-4' target='_blank' href='https://www.linkedin.com/in/aarsh-prajapati-167825270/'><Linkedin className='text-indigo-600 hover:text-indigo-900'/></a>
             <a className='cursor-pointer mr-4' target='_blank' href='https://m.facebook.com/arsh.prajapati.5'><Facebook className='text-indigo-600 hover:text-indigo-900'/></a>
            </div>
        </div>
        
        <div className='lg:flex  h-[400px] md:h-2/3 lg:h-5/6 lg:flex-col w-[600px] p-4  md:p-10 lg:justify-center items-center'>
        <div className="bg-shap1-light dark:bg-hero_shape2_dark w-[400px] h-[350px] bg-contain lg:bg-auto lg:w-[600px] lg:h-[500px] bg-no-repeat absolute lg:mt-[40px] lg:mr-32"></div>
        <div className="bg-shap2-dark dark:bg-hero_shape2_dark w-[400px] h-[350px] bg-contain lg:bg-auto lg:w-[600px] lg:h-[500px] bg-no-repeat absolute lg:mt-[40px] lg:mr-32"></div>
        <div className='bg-image lg:mr-16 absolute w-[400px] h-[350px] lg:w-[650px]  lg:h-[450px] bg-contain bg-no-repeat'>
        </div>
        </div>
      
    </div>
    )
}

export default Home
