import React from 'react'

const MagicButton = ({title,icon, position,handleClick,otherClasses }:{
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: ()=>void;
    otherClasses?: string;
  
}) => {
  return (
   
<button className="relative inline-flex h-12 w-full border border-gray-500 rounded-full hover:bg-white  overflow-hidden p-[1px] focus:outline-none md:w-60 md:mt-10  ">
  <span className="absolute inset-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E0B3FF_0%,#645DD7_50%,#E0B3FF_100%)]" />
  <span className={`relative inline-flex h-full w-full cursor-pointer  hover:text-purple items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl z-10 gap-2 ${otherClasses}`}>
     {position==='left' &&icon}
     {title}
     {position==='right' &&icon}
  </span>
</button>

          
    
  )
}

export default MagicButton
