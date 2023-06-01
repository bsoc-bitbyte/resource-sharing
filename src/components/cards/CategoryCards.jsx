const CategoryCards = (props) => {
  return (
    <div className="max-sm:w-72 max-sm:max-h-72 w-[400px] h-[400px]  bg-[#f1f5f9] shadow-[0px 11px 25px rgba(0, 0, 0, 0.25)] rounded-[44px] overflow-hidden m-6 flex justify-center relative">
      <img className="opacity-[0.23] absolute left-[97px] top-[110px]" src={`../../../public/${props.card.image}`} />
      <div className="flex items-center">
        <p className="max-sm:text-3xl monu text-[#37474F] shadow-[5px 4px 4px rgba(0, 0, 0, 0.25)] text-[41px] font-normal leading-[70px] ">
          {props.card.domain}
        </p>
      </div>
    </div>
  );
};

export default CategoryCards;
