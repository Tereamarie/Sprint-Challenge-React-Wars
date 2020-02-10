import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import CharacterCard from "./CharacterCard.js";

const CharacterStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CharacterList = () => {
  const [starChar, setStarChar] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("http https://swapi.co/api/")
      .then(res => {
        console.log(res.data.results);
        setStarChar(res.data.results);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <CharacterStyle>
      {isLoading && <h3>data is loading...</h3>}
      {starChar.map(char => (
        <CharacterCard char={char} key={char.name} />
      ))}
    </CharacterStyle>
  );
};

export default CharacterList;
