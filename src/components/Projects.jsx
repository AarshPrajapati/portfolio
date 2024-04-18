import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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


const Projects = (props) => {

  let project=[
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
    <>
      <div ref={props.project} className="md:h-screen mt-16 md:mt-0 w-screens m-auto p-8">
        <div className="flex text-4xl text-indigo-600 font-semibold justify-center">
          Projects
        </div>
        <div className="flex flex-row p-8 m-auto min-[2300px]:pl-40 pt-20 gap-8 overflow-auto pb-10">
          {project.map((data)=>(
          <div className="group relative">
            <Badge className="relative left-3 top-8 bg-indigo-500 text-white border-indigo-500 text-sm" variant="outline">{data.tech}</Badge>            
            <div class="flex absolute gap-x-4 w-full h-[200px] justify-center items-center">
              
              {data.livelink!==null?(
                <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
              <a
                target="_blank"
                class="bg-indigo-600 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 hover:bg-indigo-400"
                href={data.livelink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-link2 text-white"
                >
                  <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
                  <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
                  <line x1="8" x2="16" y1="12" y2="12"></line>
                </svg>
              </a>
              </TooltipTrigger>
              <TooltipContent>
                Live Preview
              </TooltipContent>
              </Tooltip>
              </TooltipProvider>
              ):null}
            
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
              <a
                target="_blank"
                class="bg-indigo-600 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 hover:bg-indigo-400"
                href={data.gitlink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-github text-white"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              </TooltipTrigger>
              <TooltipContent>
                Github Link
              </TooltipContent>
              </Tooltip>
              </TooltipProvider>
            </div>
            <Card className="w-full max-w-xs">
             <div className="w-[300px]">
              <img
                alt={data.imgalt}
                className="aspect-[1.6] rounded-xl"
                height="250"
                src={data.imgsrc}
                width="400"
              />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-2xl">{data.cardtitle}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-base">
                 {data.cardcontent}
                </p>
              </CardContent>
            </Card>
          </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
