import React from 'react'
import classNames from 'classnames'

const HeroSection = () => {
  const [searchParam, setSearchParam] = React.useState(''); // Search Parameter
  return (
    <main>
      <div className="h-[15vh]" />
      <div className={classNames({
        'h-[75vh] w-screen relative': true,
        'flex items-center justify-between overflow-hidden': true,
      })}>

        <img src={"https://images.pexels.com/photos/6077089/pexels-photo-6077089.jpeg"} alt={"Book Heaven"} className="mobile-sm:!scale-[1.5] hero-section-sm:block hidden absolute mobile:scale-[1.25] w-full rotate-[0deg] left-[0rem] z-0" />
        <img src={"/blueBlob-cropped.webp"} alt={"blueBlob"} className="mobile-sm:!scale-[1.5] hero-section-sm:block hidden absolute mobile:scale-[1.25] w-full rotate-[90deg] left-[1.25rem] z-0" />
        {/* Text ... */}
        <section className={classNames({
          'w-1/2 h-full': true,
          'flex flex-col flex-1 items-start justify-center gap-6': true,
          'pl-10': true,
          'hero-section:gap-3': true,
          'hero-section:w-[46%]': true,
          'hero-section-sm:items-center hero-section-sm:pl-0' : true,
          "bg-no-repeat bg-[length:110vw_110vw] bg-center": true,
          "hero-section-sm:bg-[url('/yellowBlob-cropped.webp')]": true,
          "mobile:bg-[length:120vw_120vw] mobile-sm:!bg-[length:145vw_145vw]": true,
        })}>
          {/* Title */}
          <div className={classNames({
            'flex items-center justify-center z-10': true,
          })}>
            <h1 className={classNames({
              'relative w-[26rem]': true,
              'monu hero-section:text-3xl text-4xl lg:text-5xl font-bold text-[#0F172A]': true,
              'flex items-center justify-center': true,
              'dark:text-white': true,
              'hero-section-sm:text-center hero-section-sm:flex-col hero-section-sm:gap-1 hero-section-sm:text-gray-200': true,
              'mobile:text-[1.75rem]': true,
            })}>
              Welcome to UniShare
              <div className={classNames({
                'flex items-center justify-center gap-2 my-3': true,
                'hero-section-sm:static absolute !bottom-[0.65rem] lg:right-[4.25rem]': true,
                'hero-section-lg:right-[9rem]': true,
                'hero-section:right-[12.5rem] hero-section:gap-1': true,
              })}>
                <span className={"hero-section:w-2 hero-section:h-2 w-3 h-3 bg-[#F59E0B]"} />
                <span className={"hero-section:w-2 hero-section:h-2 w-3 h-3 bg-[#3B82F6]"} />
              </div>
            </h1>
          </div>
          {/* Subtitle */}
          <p className={"mobile:!w-screen mobile:!text-center mobile:px-0 my-1 z-20 hero-section-sm:text-gray-100 hero-section:text-[1.2rem] hero-section:w-[17.5rem] text-lg lg:text-xl font-semibold w-fit"}>{"A centralized Portal for Sharing Resources"}</p>
          {/* Searchbar */}
          <div className={classNames({
            "relative w-[20rem] lg:w-[25rem] h-[3rem] px-4 z-10": true,
            "shadow bg-[#E2E8F0] rounded-r-2xl rounded-l-md": true,
            "flex items-center justify-start gap-2": true,
            // "hero-section:w-[18rem] hero-section:text-sm": true,
            "hero-section-sm:w-[20rem] hero-section-sm:rounded-lg": true,
            "mobile:!w-[90vw]": true,
          })}>
            <img src={"/searchIcon.webp"} alt={"Search"} className={"hero-section:h-6 h-8"} />
            <input
              type={"text"}
              placeholder={"Search for Notes, Books, etc."}
              value={searchParam}
              onChange={(e) => setSearchParam(e.target.value)}
              className={"w-[85%] bg-transparent outline-none text-[#37474f] font-bold text-md capitalize"}
            />
            <img
              src={"/cross1.webp"}
              alt={"Clear Search"}
              className={"hero-section:h-4 h-6 cursor-pointer"}
              onClick={() => setSearchParam('')}
            />
          </div>
        </section>

        {/* Illustration ... */}
        <section className={classNames({
          'w-3/5 h-full overflow-hidden': true,
          'flex items-center justify-center': true,
          'hero-section-sm:hidden': true,
        })}>
          <div className={classNames({
            "bg-no-repeat bg-cover bg-left-top": true,
            "w-[55rem] h-[55rem]": true,
            "bg-[url('/yellowBlob-cropped.webp')]": true,
            "flex items-center justify-end": true,
          })}>
            <img
              src={"/fileSharing3.webp"}
              alt={"File Sharing Illustration"}
              className={"hero-section:min-w-[21.5rem] w-[47.5vw] "}
            />
          </div>
        </section>
      </div>
      <div className={classNames({
        'w-screen h-fit mt-[0.9rem]': true,
        'flex items-center justify-center gap-2': true,
      })}>
        <span className={"w-2 h-2 bg-[#F59E0B]"} />
        <span className={"w-2 h-2 bg-[#3B82F6]"} />
        <span className={"w-2 h-2 bg-[#F59E0B]"} />
        <span className={"w-2 h-2 bg-[#3B82F6]"} />
        <span className={"w-2 h-2 bg-[#F59E0B]"} />
      </div>
    </main>
  )
}

export default HeroSection
