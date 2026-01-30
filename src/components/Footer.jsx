import React from 'react'
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const Footer = () => {
    let icons = [
        {
            icon: <Instagram size={20} />,
            iconname: "Instagram",
            link: "https://www.instagram.com/aarsh._.802/"
        },
        {
            icon: <Github size={20} />,
            iconname: "Github",
            link: "https://github.com/AarshPrajapati"
        },
        {
            icon: <Linkedin size={20} />,
            iconname: "Linkedin",
            link: "https://www.linkedin.com/in/aarsh-prajapati-167825270/"
        },
        {
            icon: <Facebook size={20} />,
            iconname: "Facebook",
            link: "https://m.facebook.com/arsh.prajapati.5"
        }
    ]
    return (
        <footer className="bg-black/95 border-t border-white/10 w-full py-12">
            <div className='container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6'>
                <div className='text-muted-foreground text-sm font-medium'>
                    Copyright &copy; {new Date().getFullYear()} Aarsh Prajapati. All rights reserved.
                </div>
                
                <div className='flex items-center gap-6'>
                    {icons.map((data, index) => (
                        <TooltipProvider key={index}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a 
                                        className='text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-white/5' 
                                        target='_blank' 
                                        rel="noreferrer"
                                        href={data.link}
                                    >
                                        {data.icon}
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{data.iconname}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer;
