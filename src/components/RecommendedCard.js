import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

const RecommendedMoviesCard = () => {
  const Collection = [
    {
      name: "Avatar",
      img: 'https://i.postimg.cc/V6LLKh0s/avatar.jpg',
      language:"English,Tamil,Telungu,Malayalam"
    },
    {
      name: "Avengers",
      img: "https://i.postimg.cc/VNzYNhR9/avengers.jpg",
      language:"English,Tamil,Telungu,Malayalam"
    },
    {
      name: "Kingdom of the Planet of the Apes",
      img: "https://i.postimg.cc/QNFWsBV8/ae3f0324d81da0fd3ba84443dc6a93b3.jpg",
      language:"English,Tamil,Telungu,Malayalam"
    },
  ];
  const navigate = useNavigate();
  return (
    <div>
      
    <div className="recommendedMovies">
      
      {Collection.map((col, i) => {
        return (
          <MovieCard
            name={col.name}
            img={col.img}
            language={col.language}
          />
        );
      })}
    </div>
    </div>
  );
};

export default RecommendedMoviesCard;
