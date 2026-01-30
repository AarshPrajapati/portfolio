import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Github, ExternalLink } from "lucide-react";

const Projects = (props) => {

  let project=[
    {
      tech:"React n8n Firebase",
      livelink:"https://resume-maker-fullstack.vercel.app/",
      gitlink:"https://github.com/AarshPrajapati",
      imgalt:"Resume Maker",
      imgsrc:"../Image/Resume_Maker.png",
      cardtitle:"Resume Maker",
      cardcontent:"Resume Maker made with React, n8n, Firebase, MongoDb, Node and Express"
    },
    {
      tech:"MERN",
      livelink:"https://keep-notes-phi.vercel.app/",
      gitlink:"https://github.com/AarshPrajapati/Keep-Notes",
      imgalt:"Keep-Notes",
      imgsrc:"../Image/Keep-Notes.png",
      cardtitle:"Keep-Notes",
      cardcontent:"Keep-Notes made with React , Node , Express and Mongodb"
    },
    {
      tech:"React Node",
      livelink:null,
      gitlink:"https://github.com/AarshPrajapati/Let-s-Chat",
      imgalt:"Let's Chat",
      imgsrc:"../Image/Let's_Chat.png",
      cardtitle:"Let's Chat",
      cardcontent:"Let's note made with React , Node and Socket.io"
    },
    {
      tech:".Net MVC5",
      livelink:null,
      gitlink:"https://github.com/AarshPrajapati/poll4u_web",
      imgalt:"Poll4u",
      imgsrc:"../Image/Poll4u_Web.png",
      cardtitle:"Poll4u",
      cardcontent:"Poll4u made with Asp.net MVC5 , MSSql , Bootstrap5 , jquery , js"
    },
    {
      tech:"React",
      livelink:null,
      gitlink:"https://github.com/AarshPrajapati/News_Donkey",
      imgalt:"News Donkey",
      imgsrc:"../Image/News_Donkey.png",
      cardtitle:"News Donkey",
      cardcontent:"News Donkey Made with React and News API"
    },
    {
      tech:"React",
      livelink:null,
      gitlink:"https://github.com/AarshPrajapati/textutiles",
      imgalt:"TextUtils",
      imgsrc:"../Image/Textutils.png",
      cardtitle:"Text Utils",
      cardcontent:"Text Utils made with React, Bootstrap5"
    },
    {
      tech:"HTML CSS",
      livelink:null,
      gitlink:"https://github.com/AarshPrajapati/Netflix-Clone",
      imgalt:"Netflix-Clone",
      imgsrc:"../Image/Netflix_Clone.png",
      cardtitle:"Netflix-Clone",
      cardcontent:"Netflix-clone made with HTML5 and CSS3"
    }

  ]

  return (
    <div ref={props.project} className="w-full min-h-screen py-20 px-6 lg:px-20 bg-background/50">
      <div className="flex flex-col items-center mb-16 space-y-4">
        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl">
          A collection of my recent work, showcasing my skills in full-stack development, design, and data engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {project.map((data, index) => (
          <div key={index} className="group relative h-full">
            <Card className="glass-card h-full overflow-hidden border-0 bg-card/40 hover:bg-card/60 transition-all duration-500">
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  alt={data.imgalt}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  src={data.imgsrc}
                />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {data.livelink && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={data.livelink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                          >
                            <ExternalLink size={20} />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>Live Preview</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={data.gitlink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                        >
                          <Github size={20} />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>View Code</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                
                {/* Tech Badge */}
                <div className="absolute top-4 left-4">
                   <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-xs font-medium border border-white/10">
                     {data.tech.split(' ')[0]}
                   </Badge>
                </div>
              </div>

              <CardHeader className="p-6">
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {data.cardtitle}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-6 pb-6 pt-0">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {data.cardcontent}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                   {data.tech.split(' ').map((tech, i) => (
                     <span key={i} className="text-[10px] uppercase tracking-wider text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md">
                       {tech}
                     </span>
                   ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
