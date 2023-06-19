import React from 'react'

const MaterialIntro = (props) => {
  return (
    <div className='flex items-center justify-center flex-col max-h-[77.5vh]'>
      <div className={`w-[90vw] h-[679px] m rounded-2xl`} style={{background: `url('/${props.image}')`}}>
        <div className='h-full w-full bg-[#1a1a1cb5] rounded-2xl flex flex-col justify-center items-center'>
          <div className='monu capitalize text-[#fafafa] text-6xl tracking-wide mobile:text-[2rem] anti-mobile:text-5xl text-center'>
            {props.category}
          </div>
          <div className='text-[#ffffff] text-2xl bg-[#3B82F6] rounded-2xl py-2 mobile:scale-[0.8] px-10 m-4 flex text-center mobile:text-[1rem] font-bold' style={{boxShadow: "inset 0px -5.33333px 8px rgba(0, 0, 0, 0.25), inset 0.666667px 5.33333px 8px 2.66667px rgba(0, 0, 0, 0.25)"}}>
            {props.length} Resources Found
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaterialIntro;