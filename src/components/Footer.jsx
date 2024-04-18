import React from 'react'
import { Facebook, FileDown, Github, Instagram, Linkedin, Send } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"


const Footer = () => {
    let icons=[
        {
            icon:<Instagram className='text-white hover:text-indigo-400' />,
            iconname:"Instagram",
            link:"https://www.instagram.com/aarsh._.802/"
        },
        {
            icon:<Github className='text-white hover:text-indigo-400'/>,
            iconname:"Github",
            link:"https://github.com/AarshPrajapati"
        },{
            icon:<Linkedin className='text-white hover:text-indigo-400'/>,
            iconname:"Linkdin",
            link:"https://www.linkedin.com/in/aarsh-prajapati-167825270/"
        },{
            icon:<Facebook className='text-white hover:text-indigo-400'/>,
            iconname:"Facebook",
            link:"https://m.facebook.com/arsh.prajapati.5"
        }

    ]
  return (
    <>
    <footer class="bg-indigo-900 w-full">
        <div className='flex m-auto w-full flex-col md:flex-row justify-between items-center p-10'>
            <div className='text-stone-400 text-base'>
            Copyright &copy; Aarsh Prajapati. All rights reserved.
            </div>
            <div className='flex mt-6 md:mt-0'>
                {icons.map((data)=>(
                    <TooltipProvider>
                    <Tooltip>
                    <TooltipTrigger>
                    <span><a className='cursor-pointer mr-9 max-2xl:mr-12' target='_blank' href={data.link}>{data.icon}</a></span>
                    </TooltipTrigger>
                    <TooltipContent>
                        {data.iconname}
                    </TooltipContent>
                    </Tooltip>
                    </TooltipProvider>
                ))}
            </div>
        </div>
    </footer>
    
    </>
  )
}

export default Footer
