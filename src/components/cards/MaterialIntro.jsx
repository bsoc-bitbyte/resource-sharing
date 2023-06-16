import React from 'react'

const MaterialIntro = (props) => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className={`w-[90vw] h-[679px] m rounded-2xl`} style={{background: `url('../src/assets/${props.image}')`}}>
        <div className='h-full w-full bg-[#1a1a1cb5] rounded-2xl flex flex-col justify-center items-center'>
          <div className='capitalize text-[#fafafa] text-8xl mobile:text-5xl anti-mobile:text-7xl'>
            {props.category}
          </div>
          <div className='text-[#ffffff] text-2xl bg-[#3B82F6] rounded-2xl py-2 px-10 m-4 flex text-center' style={{boxShadow: "inset 0px -5.33333px 8px rgba(0, 0, 0, 0.25), inset 0.666667px 5.33333px 8px 2.66667px rgba(0, 0, 0, 0.25)"}}>
            {props.length} Resources Found
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaterialIntro;