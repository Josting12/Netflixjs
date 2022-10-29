import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { ApplicationWrapper } from "../../component/layout/AplicationWrapper";
import Movie from "../../component/MovieList/Movie/Movie";
import { IMovie } from "../../component/MovieList/MovieList";

interface TProps {
  movie: IMovie;
}

const MovieDetailPage: NextPage<TProps> = ({ movie }) => {
  return (
    <ApplicationWrapper title={movie.Title}>
       <div className="flex flex-col justify-center text-white items-center p-12">
              <div className="flex flex-col md:flex-row md:max-w-xxl rounded-lg bg-white shadow-lg">
                  <img className=" w-full h-96 md:h-auto object-cover md:max-w-xl rounded-t-lg md:rounded-none md:rounded-l-lg" src={movie.Poster} alt={`${movie.Title} Poster`} />
                <div className="p-6 flex flex-col justify-start">
                    <h3 className="text-gray-900 text-xl font-medium mb-2">{movie.Title}</h3>

                    <p className="text-gray-700 text-base mb-4">
                       
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                       
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                       
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                       
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                       
                    </p>
                   
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Release Date: {movie["Release Date"]}</h5>
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Director: {movie.Director}</h5>
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Distribuitor: {movie.Distributor}</h5>
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Budget: {movie["Production Budget"]}</h5>
                    <h1 className="text-gray-900 text-xl font-medium mb-2">Rating: {movie["IMDB Rating"]}</h1>
                </div>
              </div>
            </div>
    
    </ApplicationWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/movies/" + context.params?.id
  );
  const movie = await res.json();

  return {
    props: {
      movie,
    },
  };
};

export default MovieDetailPage;
