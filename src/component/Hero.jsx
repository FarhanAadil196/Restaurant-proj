import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .hero {
    width: 100%;
    height: 30vh;
    background: url(${props => props.backgroundImage});
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: background 2s ease-in-out;
    box-shadow:inset 0 0 0 100rem rgba(0, 0, 0, 0.5);
      h1{
      color:white;
      }
  }

`;

const images = [
  "./1.png",
  "./2.png",
  "./3.png"
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper backgroundImage={images[currentImage]}>
      <div className="hero">
        <h1>{`Home/${window.location.pathname.split("/")[1]}`}</h1>
      </div>
    </Wrapper>
  );
}

export default Hero;