// App.js
import React from 'react';
import ImageSlider from './components/ImageSlider';

const App = () => {
  const imageNames = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image names here as needed
  ];

  const images = imageNames.map(imageName => imageName); // No need to include PUBLIC_URL

  return (
    <div>
      <h1>Image Slider Example</h1>
      <ImageSlider images={images} />
    </div>
  );
};

export default App;


