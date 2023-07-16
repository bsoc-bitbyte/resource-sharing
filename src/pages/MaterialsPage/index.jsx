import { NavBar, MaterialIntro, MaterialCard, SearchBar, Footer, BackToTop } from '../../components';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import cardData from '../../config/CardData.mjs';


const MaterialsPage = () => {
  const [materials, setMaterials] = useState([]);
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

      const fetchmaterials = async () => {
        try {
          const response = await fetch(cardData[categoryid-1].fetchlink);
          const rdata = await response.json();
          setMaterials(rdata);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchmaterials();
      }, []);
    
      return (
        <>
          <div className="h-[15vh]" />
          <NavBar />
          <MaterialIntro image={categoryimage} length={materials.length} category={cardData[categoryid-1].domain}/>
          <SearchBar />
          {materials.slice(0,5).map((material) =>
          (
            <MaterialCard material={material} key={material.id} id={material.id} />
          ))}
          <Footer />
          <BackToTop />
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