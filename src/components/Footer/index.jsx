import classNames from 'classnames';
import React from 'react';

const socials = [
  {
    name: "Github",
    svgPath: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z",
    link: "https://github.com/bsoc-bitbyte/resource-sharing"

  },
  {
    name: "LinkedIn",
    svgPath: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
    link: "https://www.linkedin.com/company/bitbyte-tpc/",
  },
]

const Footer = () => {
  let borderColor = "#87CEFA";
  let centerColor = "#B9D9EB";
  return (
    <footer 
      className={classNames({
        "bg-[#E2E8F0] dark:bg-[#E7E5E4]": true,
        "w-screen min-h-[50vh] py-14": true,
        "flex flex-col items-center justify-center gap-6": true,
      })}
      style={{
        background: `linear-gradient(90deg, ${borderColor} 0%, ${centerColor} 20%, ${centerColor} 80%, ${borderColor} 100%)`
      }}
    >
        <div className="flex flex-col items-center justify-center w-[95vw] gap-6 relative">
          <strong
            className="block text-center text-xl font-bold text-gray-900 sm:text-3xl"
          >
            Want us to email you with the latest uploads?
          </strong>

          <form className="w-screen grid place-items-center">
            <div className="relative w-[95vw] sm:w-[27.75rem]">
              <label className="sr-only" htmlFor="email"> Email </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <button
                className={classNames({
                  "px-5 py-3": true,
                  "rounded-full bg-[#3B82F6]": true,
                  "text-sm font-medium text-white": true,
                  "absolute end-1 top-1/2 -translate-y-1/2": true,
                  "transition hover:bg-blue-700": true,
                })}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-fit w-screen flex flex-col items-center justify-center">
          <div className="w-[95vw] sm:w-[35rem]">
            <p className="comfort text-center text-gray-800 font-bold mobile:text-sm">
              Unishare is a college resource sharing website designed to serve as a dynamic platform for students to collaborate and share resources. Unishare aims to foster an environment where students can easily access and exchange a wide range of educational materials, such as lecture notes, study guides, past exam papers, and more.
            </p>

            <div className="mt-6 pl-5 w-full flex items-center justify-center gap-4 scale-[0.75]">
              {socials.map((social, index) => {
                return (
                  <a
                    key={index}
                    className={classNames({
                      "bg-gray-900 px-4 py-1 rounded-[5rem]": true,
                      "flex items-center justify-center gap-0": true,
                      "text-gray-900 transition hover:text-gray-700": true,
                    })}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="h-12 w-12 invert text-black translate-y-[0.4rem] translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d={social.svgPath}
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[#E2E8F0] font-bold -translate-x-1">{social.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
    </footer>
  );
}

export default Footer;