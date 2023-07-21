const Title = ({title,paragraph}) => {
     return (
          <div className=" foodFamily  max-w-[600px] mx-auto text-center  ">
                 <div className=" flex justify-center items-center gap-1 flex-col">
                 <h1 className=" text-black font-semibold  text-3xl   uppercase "> {title}</h1>
                 <div className=" title_bar flex justify-center items-center">  
                   <div className=" w-[70px] h-full bg-[#43A4EA]">
                     
                   </div>
                 </div>
                 <p className=" text-base   font-medium"> {paragraph}</p>
                 </div>
          </div>
     );
};

export default Title;