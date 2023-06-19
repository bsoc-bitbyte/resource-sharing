import CardData from '../config/CardData.mjs';
import CategoryCards from './cards/CategoryCards.jsx';
import underline from '../assets/underline .svg'

const Content = () => {
  const card = CardData.map((value) => {
    return <CategoryCards key={value.id} card={value} />;
  });
  return (
    <div className="text-center">
      <p className="comfort pl-4 pr-4  m-0 text-[50px] tracking-[-0.4rem] leading-[60px] md:text-[4rem] 2xl:text-[5.3rem] 2xl:leading-[6.25rem] 2xl:tracking-[-0.5rem]  text-[#0f172A] ">
        Choose Your Topic !
      </p>
      <img className="pl-4 pr-4 mx-auto mb-[4rem] " src={underline} alt="underline" />
      <div className=" flex flex-wrap justify-center ">{card}</div>
    </div>
  );
};

export default Content;
