import React from 'react'

const WhyPoint = (props) => {
  return (
    
         <div className="bg-[#1a1a1a] px-[20px] py-[35px] rounded-3xl border w-max flex flex-col items-center justify-center gap-3">
            <span>
              <lord-icon
                className="h-[70px] w-[70px]"
                src={props.src}
                  colors={props.colors}
                trigger="loop"
              ></lord-icon>
            </span>
            <div className="flex  flex-col gap-2 items-center ">
              <h5 className='text-lg text-[white]'>{props.heading}</h5>
              <p className='text-[#a0a0a0] text-md text-center'>
                {props.para}
              </p>
            </div>
          </div>

  
  )
}

export default WhyPoint