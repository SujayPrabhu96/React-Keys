import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./transition.css";

const CarouselWithIndexKey = ({ itemsArray }) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("right");
  const [items, setItems] = useState([]);

  const generateItems = () => {
    setItems([]);
    var level;
    for (var i = active - 1; i < active + 2; i++) {
      var index = i;
      if (i < 0) {
        index = itemsArray.length + i;
      } else if (i >= itemsArray.length) {
        index = i % itemsArray.length;
      }
      level = active - i;
      const newElement = {
        element: itemsArray[index],
        level: level,
      };
      setItems((oldArray) => [...oldArray, newElement]);
    }
  };

  useEffect(() => {
    generateItems();
  }, [active, direction]);

  const moveLeft = () => {
    let newActive = active;
    newActive = newActive - 3;
    setActive(newActive < 0 ? itemsArray.length - 1 : newActive);
    setDirection("left");
  };

  const moveRight = () => {
    let newActive = active;
    newActive = newActive + 3;
    setActive(newActive >= itemsArray.length ? 0 : newActive);
    setDirection("right");
  };

  return (
    <div className="carousel">
      <div className="arrow arrow-left" onClick={moveLeft}>
        R
      </div>
      <TransitionGroup>
        {items.map((item, idx) => (
          <CSSTransition timeout={300} classNames={direction} key={idx}>
            <div className={`item level${item?.level}`}>{item?.element}</div>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <div className="arrow arrow-right" onClick={moveRight}>
        L
      </div>
    </div>
  );
};

export default CarouselWithIndexKey;
