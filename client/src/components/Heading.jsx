import React, { useState, useEffect } from 'react';

const Heading = () => {
  const texts = [' Flexibility', ' Access', ' Collaboration', 'Privacy']; // Array of texts to rotate
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Function to rotate text every 2 seconds
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <h1 className="text-3xl sm:text-5xl text-white  py-1">Data Leasing:  <br /> {texts[index]}</h1>
    </div>
  );
};

export default Heading;
