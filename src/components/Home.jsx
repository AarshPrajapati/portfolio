import React, { useState } from 'react'
import Typewriter from 'typewriter-effect'
import { Button } from "@/components/ui/button"
import { Facebook, FileDown, Github, Instagram, Linkedin, Send } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"






const Home = (props) => {
  const [data, setData] = useState({
    Email: "ajprajapati2003@gmail.com",
    Subject: "",
    Message: "",
  });
  const onchange = (e) => {
    setData({...data, [e.target.name]: e.target.value });
  };
  const downloadPDF = () => {
    const pdfPath = '/AarshPrajapati\ Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Aarsh Prajapati Resume.pdf';
    link.click();
  };

  const sendemail=()=>{
    const reqfield=Object.values(data).some(value => value === ''); 
    if(reqfield){
      toast("Both Fields are  Required")
    }
    else{
    const mailtoUrl = `mailto:${data.Email}?subject=${encodeURIComponent(data.Subject)}&body=${encodeURIComponent(data.Message)}`;
    window.location.href = mailtoUrl;
    }
  }
  return (
    <div ref={props.home} className='w-screen m-auto p-8 pr-0  top-0 left-0 mt-16 lg:flex md:h-[130vh] lg:h-screen  justify-between gap-x-8'>
        <div className='lg:flex w-1/2 lg:h-5/6 lg:flex-col lg:w-1/2 sm:w-max p-4 md:p-10 justify-center  items-center'>
            <div className='w-screen md:w-auto md:line-clamp-4 list-inside whitespace-normal'>
            <div className='md:text-sm uppercase font-bold mb-4 text-blue-800 tracking-[4px]'>Software Developer</div>
            <h2 className='text-4xl w-[80%] overflow-hidden md:text-6xl text-ellipsis  md:w-[90%] leading-snug  antialiased font-semibold mb-6'>Hello , my name is Aarsh Prajapati</h2>
            <h3 className='tracking-normal flex text-xl'>I am &nbsp; 
              <Typewriter
            options={{
                strings: ['Web Designer', 'Web Developer' , 'a Software Engineer'],
                autoStart: true,
                loop: true,
              }}
            /></h3>
            </div>
            <div className='flex self-start my-6 min-[2300px]:ml-32'>
              <Dialog>
            <DialogTrigger><Button className='bg-indigo-600 hover:bg-indigo-500 h-10 md:text-base'>Contact me &nbsp; <Send className='mt-1'  size='15px'/></Button></DialogTrigger>
            <DialogContent>
    <DialogHeader>
      <DialogTitle>Send Email</DialogTitle>
      <DialogDescription>
        Enter Details to Contact
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Subject" className="text-right">
              Subject
            </Label>
            <Input id="Subject" name="Subject" onChange={onchange}  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Message" className="text-right">
              Message
            </Label>
            <Textarea id="Message" name="Message" onChange={onchange} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={sendemail}>Send</Button>
        </DialogFooter>

  </DialogContent>
            </Dialog>
            <Button onClick={downloadPDF} className=' h-10 text-base ml-6'>Download CV &nbsp; <FileDown size='17px'/></Button>
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
