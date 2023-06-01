import CardData from '../../config/CardData.mjs';
import CategoryCards from '../../components/cards/CategoryCards.jsx';

const Content = () => {
  const card = CardData.map((value) => {
    return <CategoryCards key={value.id} card={value} />;
  });
  return <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>{card}</div>;
};

export default Content;
