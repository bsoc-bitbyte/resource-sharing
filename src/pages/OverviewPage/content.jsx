import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DetailsPage(props) {
  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.price);
  const [description, setDescription] = useState(props.description);
  const [author, setAuthor] = useState(props.author);
  const [pages, setPages] = useState(props.pages);
  const [materialType, setMaterialType] = useState(props.materialType);

  return (
    <>
      <div className="mt-[5rem] block" style={{ backgroundColor: '' }}>
        <div className="m-5 flex-row md:flex">
          <div
            className="w-full p-1 m-1 border-black border-2 md:w-1/2"
            style={{
              backgroundImage: `url("${props.URL}")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '500px',
            }}
          ></div>
          <div className="m-5 md:w-1/2">
            <div>
              <h1 class="pb-4 text-4xl font-extrabold dark:text-white">{title}</h1>
            </div>
            <div className="pb-4">{price}</div>

            <button
              className="mb-4 p-2 w-1/2 justify-center"
              style={{ backgroundColor: 'blue' }}
            >
              <div className="flex justify-around text-white font-bold">Read Now</div>
            </button>

            <div className="pb-2">{description}</div>
            <div className="text-1xl font-bold dark:text-white">
              Author: <text className="font-light">{author}</text>
            </div>
            <div className="text-1xl font-bold dark:text-white">
              Pages: <text className="font-light">{pages}</text>
            </div>
            <div className="text-1xl font-bold dark:text-white">
              Material Type: <text className="font-light">{materialType}</text>
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
    price: '$90',
    URL: '/overview-image.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ea reprehenderit tempora corrupti ipsa laudantium sapiente qui ratione voluptatem, mollitia amet ullam? Iste, accusamus ut qui ipsam soluta excepturi provident.',
    author: 'Mark Twain',
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
