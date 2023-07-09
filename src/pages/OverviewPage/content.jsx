import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function DetailsPage(props) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.price);
  const [description, setDescription] = useState(props.description);
  const [pages, setPages] = useState(props.pages);
  const [materialType, setMaterialType] = useState(props.materialType);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await firestore.collection('yourCollection').doc(id).get();
        const data = response.data();

      
        setTitle(data.title);
        setPrice(data.price);
        setDescription(data.description);
        setPages(data.pages);
        setMaterialType(data.materialType);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="mt-[5rem] block">
        <div className="m-5 flex-row md:flex">
          <div
            className="w-full p-1 m-1 border-black border-2 md:w-1/2 h-[500px] bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url("${props.URL}")`,
            }}
          ></div>
          <div className="m-5 md:w-1/2">
            <div>
              <h1 className="pb-4 text-4xl font-extrabold dark:text-white">{title}</h1>
            </div>
            <div className="pb-4">{price}</div>

            <button className="mb-4 p-2 w-1/2 justify-center bg-blue-600">
              <div className="flex justify-around text-white font-bold">Read Now</div>
            </button>

            <div className="pb-2">{description}</div>
            <div className="text-1xl font-bold dark:text-white">
              Pages: <span className="font-light">{pages}</span>
            </div>
            <div className="text-1xl font-bold dark:text-white">
              Material Type: <span className="font-light">{materialType}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  const bookDetails = {
    title: 'THE ADVENTURES OF HUCKLEY',
    URL: '/overview-image.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ea reprehenderit tempora corrupti ipsa laudantium sapiente qui ratione voluptatem, mollitia amet ullam? Iste, accusamus ut qui ipsam soluta excepturi provident.',
    pages: 320,
    materialType: 'E-Book',
  };

  return (
    <div>
      <DetailsPage {...bookDetails} />
    </div>
  );
}

export default App;
