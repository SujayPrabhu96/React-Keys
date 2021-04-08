import React, { useState } from "react";
import CarouselWithoutIndexKey from "./CarouselWithoutIndexKey";
import CarouselWithIndexKey from "./CarouselWithIndexKey";
import Card from "./Card";
import { IMAGE_URL } from "./constants/index";
import "./App.css";
import { WITHOUT_INDEX_AS_KEY, WITH_INDEX_AS_KEY } from "./constants/index";

const itemsArray = [
  {
    id: 1,
    card: (
      <Card image={IMAGE_URL} text="Full-day Party Cruise with Snorkeling 1" />
    ),
  },
  {
    id: 2,
    card: (
      <Card image={IMAGE_URL} text="Full-day Party Cruise with Snorkeling 2" />
    ),
  },
  {
    id: 3,
    card: (
      <Card image={IMAGE_URL} text="Full-day Party Cruise with Snorkeling 3" />
    ),
  },
  {
    id: 4,
    card: (
      <Card image={IMAGE_URL} text="Full-day Party Cruise with Snorkeling 4" />
    ),
  },
  {
    id: 5,
    card: (
      <Card image={IMAGE_URL} text="Full-day Party Cruise with Snorkeling 5" />
    ),
  },
  {
    id: 6,
    card: (
      <Card image={IMAGE_URL} text="Full-day Party Cruise with Snorkeling 6" />
    ),
  },
];

const App = () => {
  const [title, setTitle] = useState(WITHOUT_INDEX_AS_KEY);

  const handleClick = () => {
    setTitle(
      title === WITHOUT_INDEX_AS_KEY ? WITH_INDEX_AS_KEY : WITHOUT_INDEX_AS_KEY
    );
  };

  return (
    <div className="App">
      <h3>{title}</h3>
      <button onClick={handleClick}>Toggle View</button>
      {title === WITHOUT_INDEX_AS_KEY ? (
        <CarouselWithoutIndexKey itemsArray={itemsArray} />
      ) : (
        <CarouselWithIndexKey itemsArray={itemsArray} />
      )}
    </div>
  );
};

export default App;
