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
    const pdfPath = 'Image/AarshPrajapati Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Aarsh Prajapati Resume.pdf';
    link.click();
  };

  const sendemail=()=>{
    const reqfield=Object.values(data).some(value => value === ''); 
    if(reqfield){
      toast("Both Fields are Required")
    }
    else{
      const mailtoUrl = `mailto:${data.Email}?subject=${encodeURIComponent(data.Subject)}&body=${encodeURIComponent(data.Message)}`;
      window.location.href = mailtoUrl;
    }
  }

  return (
    <div ref={props.home} className='relative w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6 lg:px-20 py-20 overflow-hidden bg-background'>
      
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Text Section */}
      <div className='flex-1 flex flex-col items-start z-10 space-y-6 animate-fade-in'>
        <div className='inline-block px-3 py-1 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20'>
          Data Scientist
        </div>
        
        <h1 className='text-5xl lg:text-7xl font-heading font-extrabold leading-tight tracking-tight text-foreground'>
          Hello, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
            Aarsh Prajapati
          </span>
        </h1>

        <div className='text-3xl lg:text-4xl text-muted-foreground font-light flex items-center gap-2'>
          <span>I am a</span>
          <span className="font-semibold text-foreground">
            <Typewriter
              options={{
                strings: ['Data Scientist', 'Data Analyst', 'Machine Learning Enthusiast', 'AI Engineer'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>

        <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
          Crafting intelligent solutions through data and code. Passionate about transforming complex problems into elegant, efficient models.
        </p>

        <div className='flex flex-wrap gap-4 pt-4'>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className='rounded-full text-base px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all'>
                Contact Me <Send className='ml-2 h-4 w-4'/>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Send Email</DialogTitle>
                <DialogDescription>
                  Enter Details to Contact
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="Subject">Subject</Label>
                  <Input id="Subject" name="Subject" onChange={onchange} placeholder="Project Inquiry" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="Message">Message</Label>
                  <Textarea id="Message" name="Message" onChange={onchange} placeholder="Hello, I'd like to discuss..." />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={sendemail}>Send Message</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button variant="outline" size="lg" onClick={downloadPDF} className='rounded-full text-base px-8 border-foreground/20 hover:bg-card/50'>
            Download CV <FileDown className='ml-2 h-4 w-4'/>
          </Button>
        </div>

        <div className='flex gap-4 mt-8'>
          {[
            { Icon: Instagram, href: 'https://www.instagram.com/aarsh._.802/' },
            { Icon: Github, href: 'https://github.com/AarshPrajapati' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/aarsh-prajapati-167825270/' },
            { Icon: Facebook, href: 'https://m.facebook.com/arsh.prajapati.5' }
          ].map(({ Icon, href }, index) => (
            <a 
              key={index}
              href={href} 
              target='_blank' 
              rel="noreferrer"
              className='p-2 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110'
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
      
      {/* Image/Visual Section */}
      <div className='flex-1 flex justify-center items-center relative z-10 animate-fade-in'>
        <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
          {/* Abstract blobs behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 rounded-full opacity-20 blur-3xl animate-pulse" />
          <div className="absolute inset-4 bg-card rounded-[2rem] shadow-2xl border border-white/5 overflow-hidden flex items-center justify-center group">
             {/* You might want to use a real image here if available, or a placeholder if the original was broken */}
             <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url(/Image/Aarsh.png)' }}></div>
             {/* Fallback pattern if image is missing */}
             <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,transparent)] pointer-events-none"></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
