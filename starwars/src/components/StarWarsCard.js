import React, { Component } from "react";

const StarWarsCard = props => {
  const {
    birth_year,
    created,
    edited,
    eye_color,
    homeworld,
    name,
    gender
  } = props.characters;

  return (
    <div>
      <h1> {name}</h1>
      <p>{`${name} was born ${birth_year}.`}</p>
    </div>
  );
};

export default StarWarsCard;
