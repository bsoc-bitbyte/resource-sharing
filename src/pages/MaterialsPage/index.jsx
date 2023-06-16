import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import MaterialIntro from '../../components/cards/MaterialIntro'
import MaterialCard from '../../components/cards/MaterialCard';
import SearchBar from '../../components/SearchBar';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


const MaterialsPage = () => {
  const fetchmaterials = async () => {
    try {
      const response = await fetch('https://64870876beba6297278fb836.mockapi.io/materials');
      const materials = await response.json();
      setMaterials(materials);
    } catch (error) {
      console.log(error);
    }
  };
  const categoryimage = "'../src/assets/BackgroundImage.png'";
  const {category} = useParams();
  const [materials, setMaterials] = useState([]);

  useEffect(() => {

    fetchmaterials();
  }, [materials]);

  return (
    <>
      <NavBar />
      <MaterialIntro image={categoryimage} length={materials.length} category={category}/>
      <SearchBar />
      {materials.map((material) =>
      (
        <MaterialCard material={material} key={material.id}/>
      ))}
      <Footer />
    </>
  );
};

export default MaterialsPage;