import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import MaterialIntro from '../../components/cards/MaterialIntro'
import MaterialCard from '../../components/cards/MaterialCard';
import SearchBar from '../../components/SearchBar';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import cardData from '../../config/CardData.mjs';


const MaterialsPage = () => {
  const {category} = useParams();
  let categoryid = -1;
  cardData.map((value) => {
    if (value.urlparams == category)
    {
      categoryid=value.id;
    }
  });
  if (categoryid != -1)
  {
      const categoryimage = cardData[categoryid-1].background;
      const [materials, setMaterials] = useState([]);
      const fetchmaterials = async () => {
        try {
          const response = await fetch(cardData[categoryid-1].fetchlink);
          const materials = await response.json();
          setMaterials(materials);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
    
        fetchmaterials();
      }, [materials]);
    
      return (
        <>
          <NavBar />
          <MaterialIntro image={categoryimage} length={materials.length} category={cardData[categoryid-1].domain}/>
          <SearchBar />
          {materials.map((material) =>
          (
            <MaterialCard material={material} key={material.id}/>
          ))}
          <Footer />
        </>
      );
  };
  return (
    <>
    <div>
      <h1>404 Not Found</h1>
    </div>
    </>
  )
};

export default MaterialsPage;