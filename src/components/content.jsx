import CardData from '../config/CardData.mjs';
import { CategoryCards } from '../components';
import classNames from 'classnames';
import underline from '/underline .svg';

const Content = () => {
  return (
    <div className={classNames({
      "w-screen h-fit": true,
      "flex flex-col items-center justify-center gap-2": true,
    })}>
      <span className={classNames({
        "w-screen h-fit": true,
        "flex flex-col items-center justify-center gap-2 mb-10": true,
      })}>
        <p className={classNames({
          "text-4xl md:text-5xl": true,
          "tracking-[-0.3rem]": true,
          "comfort text-[#0f172A]": true,
          "dark:text-white": true,
        })}>
          Choose Your Topic !
        </p>
        <img className="w-[95vw] sm:w-[35rem]" src={underline} alt="underline" />
      </span>
      <div className="flex flex-wrap justify-center items-center gap-8 w-[75vw] anti-mobile:w-[95vw] mobile:w-[95vw]">
        {CardData.map((value) => {
          return <CategoryCards key={value.id} card={value} />;
        })}
      </div>
    </div>
  );
};

export default Content;  