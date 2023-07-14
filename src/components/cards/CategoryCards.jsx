import { Link } from "react-router-dom";
import classNames from "classnames";

const CategoryCards = (props) => {
  return (
    <div className={classNames({
      " w-60 h-60 lg:w-72 lg:h-72": true,
      "overflow-hidden relative cursor-pointer": true,
      "bg-[#f1f5f9] shadow-[0px_7.33333px_16.6667px_rgba(0,0,0,0.25)] rounded-[3rem]": true,
      "flex justify-center items-center": true,
      "dark:bg-[#E7E5E4] dark:!shadow-[0px_2px_24.6667px_rgba(168,162,158,0.75)]": true,
      "anti-mobile:rounded-[2rem]": true,
    })}>
    <Link to={props.card.link}>
      <img className="opacity-[0.23] absolute left-[75px] top-[75px] anti-mobile:top-[35px] anti-mobile:left-[50px] mobile:top-[35px] mobile:left-[50px]" src={`/${props.card.image}`} />
      <div className="flex items-center justify-center relative w-full h-full">
        <p className={classNames({
          "monu text-2xl text-[#37474F] font-normal text-center text-shadow": true,
        })}>
          {props.card.domain}
        </p>
      </div>
    </Link>
    </div>
  );
};

export default CategoryCards;
