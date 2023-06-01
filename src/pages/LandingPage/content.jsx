import CardData from '../../config/CardData.mjs';
import CategoryCards from '../../components/cards/CategoryCards.jsx';
import underline from '../../../public/underline .svg';
const Content = () => {
  const card = CardData.map((value) => {
    return <CategoryCards key={value.id} card={value} />;
  });
  return (
    <div className="text-center">
      <p className="comfort pl-4 pr-4  m-0 max-sm:text-[50px]  max-sm:tracking-[-0.4rem]  max-sm:leading-[60px]  font-bold text-[90px] leading-[100px]  text-[#0f172A] tracking-[-0.5rem]">
        Choose Your Topic !
      </p>
      <img className="pl-4 pr-4 mx-auto mb-[4rem] max-sm:mb-8" src={underline} alt="underline" />
      <div className=" flex flex-wrap justify-center ">{card}</div>
    </div>
  );
};

export default Content;
